# Maven Plugin Adventure

In this adventure, you will migrate an old version of the
[Spring PetClinic](https://github.com/spring-projects/spring-petclinic/)
repository (that uses Spring Boot 2) to Spring Boot 3 using Maven.

If you were migrating this by hand, you would need to do a variety of things
such as:

* Migrating to Spring Boot 2.7
* Migrating to Java 17
* Migrating to Jakarata EE 9
* Migrating to Spring Security 6.0
* Migrating to Spring Cloud 2022
* ... 

Fortunately, [OpenRewrite](https://docs.openrewrite.org/) has a
[recipe](https://docs.openrewrite.org/concepts-explanations/recipes) that takes
care of all of these pieces for you. Because of that, you only need to add the
OpenRewrite plugin to your project and run a single 
[Migrate to Spring Boot 3.0](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_0)
recipe.

Let's walk through how to do that.

## Prepare your environment

Switch to Java 8 so you can properly build this repository. You might need to
   download Java 8 and update your `JAVA_HOME` environment variable. If you are
   on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

```shell
sdk install java 8.0.372-tem
sdk use java 8.0.372-tem
```

  * If you aren't on a Unix-based system or you don't want to install SDKMan,
    you'll need to install Java 8 and run something like:

```shell
export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_8
```

1. Clone the [Spring PetClinic
   repository](https://github.com/spring-projects/spring-petclinic):

```shell
git clone https://github.com/spring-projects/spring-petclinic
```

2. Check out the last Spring Boot 2.0 commit:

```shell
git checkout b527de52f5fd19f9fe550372c017d145a3b2a809
```

3. Make sure it runs on your machine:

```shell
./mvnw package -DskipTests
``` 

## Migrate to SpringBoot 3 with OpenRewrite

For Maven projects, you can choose to update the `pom.xml` to add the
OpenRewrite dependencies or you can run a more complex command in the command
line that includes all of the information needed to run the recipe.

### Option 1: Update the pom.xml

Modify the `pom.xml` file and add the following information:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project>
    ...
    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>5.2.4</version>
                <configuration>
                    <activeRecipes>
                        <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
                    </activeRecipes>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>org.openrewrite.recipe</groupId>
                        <artifactId>rewrite-spring</artifactId>
                        <version>5.0.2</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>
```

Once you've done that, you can run the Upgrade Spring Boot 3.0 recipe by running
this command:

```shell
 ./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run
```

You can then compare the results by running:

```shell
git diff
```

### Option 2: Use the command line

You can run a recipe without editing the `pom.xml` file by including all of the
details in the command line. Below is the command for running the
`UpgradeSpringBoot_3_0` recipe:

```shell
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0 -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:5.0.2
```

You can then compare the results by running:

```shell
git diff
```
If you look at the results you should see that:

  * The `@Autowired` annotation was removed
  * JUnit 4 has been replaced with JUnit 5
  * `javax` has been replaced with `jakarta`
  * The code has been migrated to Java 17 and text blocks are used
  * Some best practices are applied (such as adding the `public` test method modifier)
   
## (Optional) Fix Static Code Analysis Issues

If you have time, we recommend trying out one of the most important recipes in
OpenRewrite: [common static analysis](https://docs.openrewrite.org/recipes/java/cleanup/commonstaticanalysis).
This recipe is composed of 50+ recipes that find and fix common mistakes people
make.

To demonstrate this recipe, we'll use a different Maven repository that has a
variety of errors that need to be fixed.

1. Clone the [Spring WS](https://github.com/spring-projects/spring-ws)
   repository:

```shell
git clone https://github.com/spring-projects/spring-ws
```

2. Test that you can build it:

```shell
cd spring-ws
./mvnw package -DskipTests
```

3. Run the common static analysis recipe:

```shell
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.CommonStaticAnalysis
```

4. Check out all of the changes that were made by running: 

```shell
git diff
```
