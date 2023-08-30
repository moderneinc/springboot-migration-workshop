---
sidebar_position: 7
---
# Spring Boot Migrator exercise

The [Spring Boot Migrator](https://github.com/spring-projects-experimental/spring-boot-migrator/)
(SBM) is a CLI tool that automates code migrations to upgrade or migrate to Spring Boot 3. It offers an opinionated API
that is compatible with OpenRewrite recipes as well as a specialized resource representation to simplify recipe
development for Spring Boot.

:::caution
This is a very experimental project and not our recommended way of migrating to Spring Boot 3.
With that being said, we wanted to show what alternatives exist so that you can make the decision that best meets your
own needs.
:::

## Prepare your environment

1. Switch to Java 17 so you can properly build this repository. You might need to download Java 17 and update your
   `JAVA_HOME` environment variable. If you are on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

   ```shell
   sdk install java VERSION_SDKMAN_JAVA17
   sdk use java VERSION_SDKMAN_JAVA17
   ```

   :::note
   If you aren't on a Unix-based system or you don't want to install SDKMan,
   you'll need to install Java 17 and run something like:

   ```shell
   export JAVA_HOME=REPLACE_FOR_LOCATION_OF_JAVA_17
   ```
   :::

2. Download the `spring-boot-upgrade.jar`:

   ```shell
   wget https://github.com/spring-projects-experimental/spring-boot-migrator/releases/latest/download/spring-boot-upgrade.jar
   ```

3. Clone the [Spring PetClinic](https://github.com/spring-projects/spring-petclinic) repository

   ```shell
   git clone https://github.com/spring-projects/spring-petclinic
   ```

4. Check out the last Spring Boot 2.0 commit. **In this case it is a different commit,
   because we need a solution that builds with Java 17**:

   ```shell
   git checkout 9ecdc1111e3da388a750ace41a125287d9620534
   ```

5. Make sure it runs on your machine:

   ```shell
   ./mvnw verify -DskipTests
   ``` 

6. Make sure that you are using Java 17. We've found that SBM does not work with
   Java 19.

   ```shell
   java -version
   ```

## Run the SBM

1. To run the SBM, navigate to your Spring PetClinic repository and execute this
   command:

   ```shell
   java -jar ../spring-boot-upgrade.jar .
   ```

2. Open
   [http://localhost:8080/spring-boot-upgrade](http://localhost:8080/spring-boot-upgrade)
   with your browser and follow the instructions on that page. You will find a list of mandatory recipes and other
   optional ones that you can select depending on your preferences.

3. Note that there are GitHub issues listed in some of the recipes. To see what has changed for each recipe, you need to
   check what commits have been introduced from your Git user in the repository. To do so, run `git log` and look for
   commits starting with `SBM: `.

4. This should print you a list of commits like:

   ```shell
   commit dd308045cff42f384a51c42428030eaeaa5185f3 (HEAD -> boot-3-upgrade-demo)
   Author: rpau <raquel@moderne.io>
   Date:   Fri May 12 12:32:2VERSION_REWRITE_GRADLE_PLUGIN3 +0200
   
       SBM: applied recipe 'sbu30-paging-and-sorting-repository'
   
   commit ad2f01a72b8230862e3dc2df6245aa93b04ec0ae
   Author: rpau <raquel@moderne.io>
   Date:   Fri May 12 12:31:01 2023 +0200
   
       SBM: applied recipe 'sbu30-remove-construtor-binding'
   
   commit 9508abe8aa6ea7ec2e674621d65ec91ab7dec1af
   Author: rpau <raquel@moderne.io>
   Date:   Fri May 12 12:30:59 2023 +0200
   
       SBM: applied recipe 'sbu30-remove-image-banner'
   
   commit a259e4306829a5c2e34c141a1442cfabd917c9c8
   Author: rpau <raquel@moderne.io>
   Date:   Fri May 12 12:30:55 2023 +0200
   
       SBM: applied recipe 'sbu30-225-logging-date-format'
   
   commit 711cbad9aa3df4de385cbd3187f092d614403e8a
   Author: rpau <raquel@moderne.io>
   Date:   Fri May 12 12:30:50 2023 +0200
   
       SBM: applied recipe 'sbu30-upgrade-boot-version'
   
   commit 3057b409bfb57116237cbf1cd158366d94009b60
   Author: rpau <raquel@moderne.io>
   Date:   Fri May 12 12:30:37 2023 +0200
   
       SBM: applied recipe 'sbu30-upgrade-dependencies'
   ```

5. To understand the code changes for each commit, you can use the `git show $SHA` command. Please note that these code
   changes will be different than what you'd get from the other exercises in this workshop. For instance, this patch is
   not included with SBM:

   ```shell
   --- a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
   +++ b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
   @@ -17,10 +17,10 @@ package org.springframework.samples.petclinic.model;
    
    import java.io.Serializable;
    
   -import javax.persistence.GeneratedValue;
   -import javax.persistence.GenerationType;
   -import javax.persistence.Id;
   -import javax.persistence.MappedSuperclass;
   +import jakarta.persistence.GeneratedValue;
   +import jakarta.persistence.GenerationType;
   +import jakarta.persistence.Id;
   +import jakarta.persistence.MappedSuperclass;
   ```

   The reason for these differences is largely due to the fact that this project has not been recently updated, whereas
   the Spring Boot 3 recipe has evolved over time.
