# Moderne CLI Adventure

In this adventure, you will use the [Moderne
CLI](https://docs.moderne.io/moderne-cli/cli-intro), a free tool that allows
developers to run OpenRewrite recipes without configuring any build plugin, to
migrate a repository from Spring Boot 2 to Spring Boot 3.

Afterwards, you'll use the CLI to publish your own OSS repository to the Moderne
platform so that you can run recipes on it without having to build it over and
over.

## Prepare your environment

1. Download the Moderne CLI by going to
   [https://public.moderne.io](https://public.moderne.io), clicking on the `?`
   in the top right corner, and selecting `Moderne CLI` from the menu:

![context menu](assets/cli-download.png)

2. Create a Moderne Access Token by going to
   [https://public.moderne.io/settings/access-token](https://public.moderne.io/settings/access-token).
   Once there, enter a name for the token and press `generate`.

3. Export your token as an envorinment variable

```shell
export MODERNE_ACCESS_TOKEN="mat-YOUR_TOKEN_HERE"
```

4. Clone the [Spring PetClinic
   repository](https://github.com/spring-projects/spring-petclinic) to your
   machine:

```shell
git clone https://github.com/spring-projects/spring-petclinic
```

5. Check out the last Spring Boot 2.0 commit:

```
git checkout 9ecdc1111e3da388a750ace41a125287d9620534
```

6. Make sure it runs on your machine:

```shell
./gradlew build -x test
``` 

## Migrate to Spring Boot 3 using the Moderne CLI

1. Run the following command from the `spring-petclinic` repository:

```shell
mod run --path . --recipeName org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0 --recipeGAV org.openrewrite.recipe:rewrite-spring:4.36.0
```

2. The previous command should have updates your source files. You can then see the changes made by running:

```shell
git diff
```

## Run a recipe in a remote repositories

Publishing your [Lossless Semantic
Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts
to the platform allows you to run multiple recipes without having to build the
repository every time (as LSTs contain all of the information needed to run a
recipe).

We have already many LST open source repositories in the platform. With the
Moderne CLI you can run an existing recipe or debug a recipe to see if it
might work in repositories that have published their LSTs.

With the following command you will run the CleanUp recipe for all the Netflix 
repositories we have in the Moderne platform. 

````shell
mod run --repositories "github.com/Netflix/.+@main" --recipeName org.openrewrite.java.cleanup.Cleanup --recipeGAV 
org.openrewrite:rewrite-java:7.38.0
```

The [CleanUp recipe](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.Cleanup?) 
removes unnecessary parenthesis and simplify some expressions.

We invite you to experiment to run [any of our recipes](https://public.moderne.io/marketplace) 
in the OSS repositories we have from Netflix.  
