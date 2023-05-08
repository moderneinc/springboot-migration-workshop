# Spring Tools Adventure

In this adventure, we are going to migrate an old version
of a Spring (Maven) application to Spring Boot 3 using 
Visual Studio.

## Prepare your environment

- Install Visual Studio Code.
- Install Spring Tools 4 plugin from https://spring.io/tools
- Clone the Spring Petclinic repository, which is an Spring Boot
application example for demo purposes:

```
git clone https://github.com/spring-projects/spring-petclinic
```

Now, let's come back to the past where Spring 2.7 was used.

```
git checkout 9ecdc1111e3da388a750ace41a125287d9620534
```

## Migrate to Spring Boot 3 using Spring Tools 4 

Spring Tools 4 embeds OpenRewrite, and from Visual Studio, there is 
a limited number of OpenRewrite migrations that can be applied. This
is a very recent feature that it is only available for Maven projects.

To see the list of refactors available, you need to open the `pom.xml`
file. You will see two important options:

- Refactor Spring Boot project
- Upgrade Spring Boot version  

![Visual Studio Dialog](context-menu-options.png)

In this exercise, we will select `Upgrade Spring Boot Version`, then the
following dialog should appear:

![Migration options](migration-options.png)

Select `Migrate to Spring Boot 3.0`. Then a progress message will appear at 
the very bottom of Visual Studio Code. After the process finishes, the changes
has not been yet saved into disk and you might perceive that there are just few
changes applied.

Click on `File` > `Save All` and then you can easily preview the changes
in Git. 

```
git diff
```

