# Gradle Plugin Adventure

In this adventure, you will migrate an old version of the
[Spring PetClinic](https://github.com/spring-projects/spring-petclinic/)
repository (that uses Spring Boot 2) to Spring Boot 3.

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
OpenRewrite plugin to your project and run a single [Migrate to Spring Boot
3.0](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_0)
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
git checkout 9ecdc1111e3da388a750ace41a125287d9620534
```

3. Make sure it runs on your machine:

```shell
./gradlew build -x test
```

## Migrate to SpringBoot 3 with OpenRewrite

OpenRewrite can be configured in your `build.gradle` file or as an additional
`init.gradle` script without having to edit any previous build configuration
([see how
here](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build)). 

1. For simplicity, we've included an [init.gradle](./init.gradle) file in this
   folder that contains the Spring Boot migration recipe as well as the
   OpenRewrite dependencies. Please copy [this file](./init.gradle) to the
   Spring PetClinic repository you have checked out locally.

2. With that file copied over, if you run `rewriteRun`, you will apply the
   migration recipe:

```shell
./gradlew --info --init-script init.gradle rewriteRun
```

3. You can then review the changes by running `git diff`. If you look at the results you should see that:

  * The `@Autowired` annotation was removed
  * JUnit 4 has been replaced with JUnit 5
  * `javax` has been replaced with `jakarta`
  * The code has been migrated to Java 17 and text blocks are used
  * Some best practices are applied (such as adding the `public` test method modifier)
   
## (Optional) Fix Static Code Analysis Issues

If you have time, we recommend trying out one of the most important recipes in
OpenRewrite: [common static
analysis](https://docs.openrewrite.org/recipes/java/cleanup/commonstaticanalysis).
This recipe is composed of 50+ recipes that find and fix common mistakes people
make.

To demonstrate this recipe, we'll use a different Gradle repository that has a
variety of errors that need to be fixed.

1. Clone the [Netflix Testing Framework](https://github.com/Netflix/q)
   repository:

```shell
git clone https://github.com/Netflix/q
```

2. Switch to Java 8 so you can properly build this repository. You might need to
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

3. With the right version of Java installed, test that you can build it:

```shell
./gradlew build -x test
```

4. Copy and apply the [patch](./configure-build.patch) that is in this directory
   to the `build.gradle` file. This will automatically configure the rewrite
   Gradle plugin in the repository for you. We recommend that you look at the
   differences to understand how it is configured:

```shell
// Copy the file to the q repository first

git apply configure-build.patch
```

5. With the patch applied, you can now run OpenRewrite:

```shell
./gradlew rewriteRun
```

6. Check out all of the changes that were made by running: 

```shell
git diff
```
