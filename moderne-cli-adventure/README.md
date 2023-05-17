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

3. Store the token in your local file system so it can be used by the CLI:

```shell
mkdir -p ~/.moderne && echo "mat-YOUR_TOKEN_HERE" > ~/.moderne/token.txt
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

2. The previous command should have printed a path to a patch file in the
   standard output. Let's take that patch file and apply it:

```shell
git apply PATCH_FILE_NAME
```

3. You can then see the changes made by running:

```shell
git diff
```

## Publish your OSS repositories to the Moderne platform

Publishing your [Lossless Semantic
Tree](https://docs.moderne.io/concepts/lossless-semantic-trees) (LST) artifacts
to the platform allows you to run multiple recipes without having to build the
repository every time (as LSTs contain all of the information needed to run a
recipe).

Let's walk through how to build and publish artifacts for your repository.

1. Clone your repository locally and run the `mod publish` command:

```shell
git clone YOUR_REPO
mod publish --path PATH_TO_YOUR_REPO
```

2. After a few minutes, you should see it appear in the [Moderne
   platform](https://public.moderne.io/). To check if the repository has been
   added, go to
   [https://public.moderne.io/organizations](https://public.moderne.io/organizations)
   and search for your repository name.

3. If you want to run a recipe against your repository on the Moderne platform,
   please continue to the [Moderne platform
   Adventure](/moderne-platform-adventure/README.md).
