# Maven Plugin Adventure

In this adventure we are going to see how to use open rewrite in a Maven project
and run a recipe to migrate to Spring Boot 3. 

OpenRewrite recipes are lego blocks and therefore this process consists of multiple steps that are invisible for you:

- Migrate to Spring Boot 2.7
- Migrate to Java 17
- Migrate to Jakarta EE 9
- Migrate to Spring Security 6.0
- Migrate to Spring Cloud 2022 ...

Therefore, you only need to apply a single [Migrate to Spring Boot 3.0](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_0) adding the 
OpenRewrite's plug-in to your project and configuring the recipe.

Optionally, if you can also play with another of the most important recipes 
for Static Code Analysis.

## Prepare your environment

1. Clone the repository `https://github.com/spring-projects/spring-petclinic`

```
git clone https://github.com/spring-projects/spring-petclinic
```

2. Checkout the last commit in Spring Boot 2.0

```
cd spring-petclinic
git checkout 9ecdc1111e3da388a750ace41a125287d9620534
```
3. Test you can build it

```
./mvnw package -DskipTests
``` 

## Run OpenRewrite

In this case, one way is to modify the `pom.xml` file and add the following information:

```
<?xml version="1.0" encoding="UTF-8"?>
<project>
    ...
    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.45.3</version>
                <configuration>
                    <activeRecipes>
                        <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
                    </activeRecipes>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>org.openrewrite.recipe</groupId>
                        <artifactId>rewrite-spring</artifactId>
                        <version>4.36.0</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>
```
The only thing you need to run open-rewrite is 

```
 ./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run
```

Or, alternative, without modifying the `pom.xml` file, you can run

```
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0 -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.36.0
```

Now, you can compare the results by simply running 

```
git diff
```

## Play with Static Code Analysis recipes

In this case we are going to use the [Spring WS](https://github.com/spring-projects/spring-ws)
repository. This is an existing Spring repository that it is good to see what kind of static 
code analysis issues can be fixed. 

The [static code analysis recipe](https://docs.openrewrite.org/recipes/java/cleanup/commonstaticanalysis)
consists of more than 50 types of coding style issues that are automatically fixed with OpenRewrite.

1. Clone the spring-ws repository

```
git clone https://github.com/spring-projects/spring-ws
```

2. Test you can build it

```
cd spring-ws
./mvnw package -DskipTests
```

3. Run OpenRewrite. The only thing you need to run open-rewrite is

```
 ./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.CommonStaticAnalysis
```


