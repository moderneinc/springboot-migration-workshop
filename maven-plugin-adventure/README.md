#Maven Plugin Adventure

In this adventure we are going to see how to use open rewrite in a Maven project
and run a recipe to apply static code analysis best practises to our repository.

This [recipe](https://docs.openrewrite.org/recipes/java/cleanup/commonstaticanalysis) 
consists of more than 50 types of issues.

##Prepare your environment

In this case we are going to use the [Spring WS](https://github.com/spring-projects/spring-ws)
repository. 

```
git clone https://github.com/spring-projects/spring-ws
```

Test you can build it

```
./mvnw package -DskipTests
```

##Run OpenRewrite

The only thing you need to run open-rewrite is 

```
 ./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.CommonStaticAnalysis
```

Now, you can compare the results by simply running 

```
git diff
```

