---
sidebar_position: 3
---

# Gradle Plugin exercise

In this exercise, you will migrate an old version of the
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
3.1](https://docs.openrewrite.org/recipes/java/spring/boot3/VERSION_LINK_SPRING_BOOT)
recipe.

Let's walk through how to do that.

## Prepare your environment

Switch to Java 11 so you can properly build this repository. Please, notice that we need Java 11 and not
Java 8 like in the [Maven Plugin exercise](../maven-plugin). This is because the first commit that supports
Gradle build, already uses Java 11. You might need to download Java 11 and update your `JAVA_HOME` environment variable.
If you are on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

```shell
sdk install java VERSION_SDKMAN_JAVA11 
sdk use java VERSION_SDKMAN_JAVA11 
```

:::note

If you aren't on a Unix-based system or you don't want to install SDKMan, you'll need to install Java 11 and run
something like:

```shell
export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_11
```

:::

1. Clone the [Spring PetClinic repository](https://github.com/spring-projects/spring-petclinic):

   ```shell
   git clone https://github.com/spring-projects/spring-petclinic
   ```

2. Check out the first Gradle build commit:

   ```shell
   cd spring-petclinic
   git checkout 4df621b41ed3013e527d4037d83a6cf756efd784
   ```

   This commit has already some of the potential migrations of the recipe applied, but it's the first one with Gradle
   support.
   So, when running the recipe afterwards, we will see less changes being made than in
   the [Maven Plugin exercise](../maven-plugin).
   For example, JUnit has already been migrated to version 5, and we have Java 11 instead of 8.

3. Make sure it runs on your machine:

   ```shell
   ./gradlew build -x test
   ```

## Migrate to SpringBoot 3 with OpenRewrite

OpenRewrite can be configured in your `build.gradle` file or as an additional
`init.gradle` script without having to edit any previous build configuration
([see how
here](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build)).

1. For simplicity, we've included an [init.gradle](init.gradle) file in this
   folder that contains the Spring Boot migration recipe as well as the
   OpenRewrite dependencies. Please copy [this file](init.gradle) to the
   Spring PetClinic repository you have checked out locally.

2. Now due to some [Guava incompatibility issues with Gradle 6](https://github.com/google/guava/releases/tag/v32.1.0)
   specifically, and Wro4j being incompatible with Gradle 7, we have to first awkwardly downgrade to Gradle 5.

   ```shell
   ./gradlew wrapper --gradle-version 5.6.4
   ```

   Don't worry; we will upgrade Gradle automatically as part of the recipe run, to be compatible with Java 17.

3. With `init.gradle` copied over, if you run `rewriteRun`, you will apply the migration recipe:

   ```shell
   ./gradlew --info --init-script init.gradle rewriteRun
   ```

   :::info
   Running
   OpenRewrite [can take a while](https://docs.openrewrite.org/reference/faq#my-recipe-appears-to-hang-when-running.-whats-happening-is-there-a-progress-report),
   as we analyze the project and run recipes to make code changes.
   You should see results within a couple of minutes, depending on the size of your project and your machine.
   :::

## Explore the results

You can compare the changes made through OpenRewrite in your favorite IDE, or by running:

```shell
git diff
```

If you look at the results you should see that:

* The `@Autowired` annotation was removed
* JUnit 4 has been replaced with JUnit 5
* `javax` has been replaced with `jakarta`
* The code has been migrated to Java 17 and text blocks are used
* Some best practices are applied (such as adding the `public` test method modifier)

Now unfortunately, the build is broken, as the commit we started from is using Wro4j, which does not work on Java 17 or
Gradle 7.
We've decided not to cover Wro4j with recipes for now,
as [Spring Petclinic has dropped Wro4J](https://github.com/spring-projects/spring-petclinic/pull/868) as well.

## (Optional) Fix Static Code Analysis Issues

:::caution
Below needs work, as there's runtime failures with Java 8 vs 11.
:::

If you have time, we recommend trying out one of the showcase recipes in
OpenRewrite: [common static
analysis](https://docs.openrewrite.org/recipes/staticanalysis/commonstaticanalysis).
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
   sdk install java VERSION_SDKMAN_JAVA8
   sdk use java VERSION_SDKMAN_JAVA8
   ```

   :::note
   If you aren't on a Unix-based system or you don't want to install SDKMan, you'll need to install Java 8 and run
   something like:

      ```shell
      export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_8
      ```
   :::

3. With the right version of Java installed, test that you can build it:

   ```shell
   ./gradlew build -x test
   ```

4. Copy and apply the [patch](configure-build.patch) that is in this directory
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
