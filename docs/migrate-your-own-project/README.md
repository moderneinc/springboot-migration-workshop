---
sidebar_position: 8
---

# Migrate your own project

## Support timelines

[OSS support for Spring Boot](https://spring.io/projects/spring-boot#support) 2.7 will end on November 18th, 2023,
while support for Spring Boot 3.0 will end on November 24th, 2023.
So if you haven't already, now's the time to migrate your project to Spring Boot 3.1!

![support-timelines.png](assets%2Fsupport-timelines.png)

## Leap to Spring Boot 3.1

This guide will help you migrate your own project to Spring Boot 3.1.
You've already seen various ways of running OpenRewrite recipes by now;
pick the one that best suits your project for this migration.
For a recap and detailed instructions see each of the indivual exercises:

- [Maven plugin](../maven-plugin)
- [Gradle plugin](../gradle-plugin)
- [Moderne CLI](../moderne-cli)
- [Spring Tools](../spring-tools)
- [Spring Boot Migrator](../spring-boot-migrator)

You will want
to [run the VERSION_MIGRATE_SPRING_BOOT recipe](https://docs.openrewrite.org/recipes/java/spring/boot3/VERSION_LINK_SPRING_BOOT),
which runs you through all the steps of migrating to Spring Boot 3.1, no matter what version you're coming from.

## Migrate in steps

If you'd rather migrate in steps, you can also run recipes individually. This can be helpful if you'd like to review and
build confidence in the changes, or need to troubleshoot a particular aspect.

As you can see
in [the VERSION_MIGRATE_SPRING_BOOT recipe](https://docs.openrewrite.org/recipes/java/spring/boot3/VERSION_LINK_SPRING_BOOT),
that first takes you [to Spring Boot 3.0](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_0),
which first takes
you [to Spring Boot 2.7](https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespringboot_2_7),
which first takes
you [to Spring Boot 2.6](https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespringboot_2_6),
... You can run any of these intermediate recipes, to pick up the changes up to that point.

You can also pick out specific migrations, for as much as you aren't up-to-date already, such as

- [Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4](https://docs.openrewrite.org/recipes/java/spring/boot2/springboot2junit4to5migration)
- [Migrate to Java 17](https://docs.openrewrite.org/recipes/java/migrate/upgradetojava17), which of course
  includes [Migrate to Java 11](https://docs.openrewrite.org/recipes/java/migrate/java8tojava11)
- [Migrate to Spring Security 5.8](https://docs.openrewrite.org/recipes/java/spring/security5/upgradespringsecurity_5_8)
- [Spring Boot 2.x best practices](https://docs.openrewrite.org/recipes/java/spring/boot2/springboot2bestpractices)

## Best practices after you migrate

After you've migrated to Spring Boot 3.1, you might want to consider some of the following best practices:

- [Common static analysis issues](https://docs.openrewrite.org/recipes/staticanalysis/commonstaticanalysis)
- [JUnit Jupiter best practices](https://docs.openrewrite.org/recipes/java/testing/junit5/junit5bestpractices)
- [AssertJ best practices](https://docs.openrewrite.org/recipes/java/testing/assertj/assertj)
- [SLF4J best practices](https://docs.openrewrite.org/recipes/java/logging/slf4j/slf4jbestpractices)
- [Java security best practices](https://docs.openrewrite.org/recipes/java/security/javasecuritybestpractices)
- [Find and fix vulnerable dependencies](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck)

You might even want to run some of these recipes periodically, to keep your projects up-to-date continuously.

## Helpful resources

Here's a number of links that might be helpful in case you encounter edge cases not yet covered:

- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Release-Notes
- https://github.com/spring-projects/spring-boot/wik
