# Gradle Plugin Adventure

In this adventure we are going to see how we can migrate an old version of
the spring-petclinic repository that was using Spring Boot 2 to Spring Boot 3.

OpenRewrite recipes are lego blocks and therefore this process consists of multiple
steps that are invisible for you:

- Migrate to Spring Boot 2.7
- Migrate to Java 17
- Migrate to Jakarta EE 9
- Migrate to Spring Security 6.0
- Migrate to Spring Cloud 2022
...

Therefore, you only need to apply a single [Migrate to Spring Boot 3.0]
(https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_0) 
adding the OpenRewrite's plug-in to your project and configuring the recipe.

## Prepare your environment

1. Clone the repository `https://github.com/spring-projects/spring-petclinic`

```
git clone https://github.com/spring-projects/spring-petclinic
```

2. Checkout the last commit in Spring Boot 2.0

```
git checkout 9ecdc1111e3da388a750ace41a125287d9620534
```
3. Test you can build it

```
./gradlew build -x test
``` 

## Migrate to SpringBoot 3 with OpenRewrite

OpenRewrite can be configured in the `build.gradle` file or as an additional `init.gradle` [see how 
here](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build)
file without having to edit any previous build configuration. 

1. For simplicity, copy the `init.gradle` file that is in this folder, which already contains the Spring Boot
recipe configured.

```
cp init.gradle spring-petclinic/init.gradle
```

2. Run OpenRewrite

```
./gradlew --info --init-script init.gradle rewriteRun
```

3. Review the changes with `git diff`

## Play with Static Code Analysis recipes!

If you are interested to play with more recipes, we recommend to play with one of the most populare OpenRewrite recipes: [static code analysis 
recipe](static code analysis recipe), which is composed by more than 50 other recipes. In this case, we are going to use a different 
active Gradle repository that shows a wide variety of errors. The selected repository is the [Netflix Testing Framework]( 
https://github.com/Netflix/q)

1. Clone the repository 

```
git clone https://github.com/Netflix/q
```

2. For this repository, you need to switch to Java 8 to properly build it. So, you might need to download Java 8 and update your `JAVA_HOME` 
environment variable.

```
export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_8
```

3. Test that you can build it

```
cd q
./gradlew build -x test
```

4. Apply the patch that is in this directory to the build.gradle file. This will automatically configure the rewrite Gradle plugin in the repository for you. We recommend to look at the differences to understand how it is configured.

```
git apply configure-build.patch
```

5. Run OpenRewrite

```
./gradlew rewriteRun
```

6. Look at the automatic changes we made

```
git diff
```


