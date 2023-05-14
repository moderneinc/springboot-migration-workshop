# Spring Boot Migrator Adventure

Spring Boot Migrator(SBM) offers a CLI to run recipes to migrate or upgrade 
a given application to Spring Boot 3. For developing new and custom recipes, SBM 
provides an opinionated API compatible with OpenRewrite recipes and a set of 
specialized resource representations to simplify recipe development for 
Spring Boot.

*IMPORTANT: This is a very experimental project and not
our recommended way to migrate to Spring Boot 3. The project has not created more
releases since 2022 and there are important reported bugs that need to be fixed to 
propertly run in any repository. However, the goal of this workshop is to show
what are the current available alternatives to migrate to Spring Boot 3 and enable
you to decide by your own.* 

## Prepare your environment

1.  Download the spring-boot-upgrade.jar

```
wget https://github.com/spring-projects-experimental/spring-boot-migrator/releases/latest/download/spring-boot-upgrade.jar
```

2. Clone the Spring Boot 2 repository example: ` https://github.com/sanagaraj-pivotal/demo-spring-song-app.git`

```
git clone https://github.com/sanagaraj-pivotal/demo-spring-song-app.git
cd demo-spring-song-app
git checkout -b boot-3-upgrade-demo tags/demo
```

3. Validate that you are running with Java 17`. SBM fails when it is tested with Java 19.

```
java -version
```

## Run the SBM

1. Run SBM

```
java -jar ../spring-boot-upgrade.jar .
```

2. Open http://localhost:8080/spring-boot-upgrade with your browser and follow the instructions. The instructions will list you a list of 
mandatory recipes and others that are optional depending on your preferences. 

Notice that there are GitHub issues listed in some of the listed 
recipes. To see what have changed by each recipe, you need to check what commits have been introduced with your Git user in the repository.

3. Simply run `git log` and detect the commits that starts with `SBM:`.

```
git log
```

This should print you a list of commits like:

```
commit dd308045cff42f384a51c42428030eaeaa5185f3 (HEAD -> boot-3-upgrade-demo)
Author: rpau <raquel@moderne.io>
Date:   Fri May 12 12:32:26 2023 +0200

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
 
To understand the code changes of each change, you can use the `git show $SHA` command. 

