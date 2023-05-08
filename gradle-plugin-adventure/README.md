#Gradle Plugin Adventure

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

In this case we are going to use the [Spring WS](https://github.com/Netflix/metacat)
repository. 


## Prepare your environment

- Clone the repository `https://github.com/spring-projects/spring-petclinic`

```
git clone https://github.com/spring-projects/spring-petclinic
```

- Checkout the last commit in Spring Boot 2.0

```
git checkout 9ecdc1111e3da388a750ace41a125287d9620534
```
- Test you can build it

```
./gradlew build -x test
``` 

## Configure OpenRewrite

OpenRewrite can be configured in the `build.gradle` file or as an additional `init.gradle` [see how 
here](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build)
file without having to edit any previous build configuration. 

For simplicity, copy the `init.gradle` file that is in this folder, which already contains the Spring Boot
recipe configured.

```
cp init.gradle spring-petclinic/init.gradle
```

## Rewrite the project to Spring Boot 3

- Run `./gradlew --info --init-script init.gradle rewriteRun`

- Review the changes with `git diff`

## Play with more recipes!
