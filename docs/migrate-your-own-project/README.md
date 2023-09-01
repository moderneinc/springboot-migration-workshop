---
sidebar_position: 8
---

# Migrate your own project

[OSS support for Spring Boot](https://spring.io/projects/spring-boot#support) 2.7 will end on November 18th, 2023,
while support for Spring Boot 3.0 will end on November 24th, 2023.
So if you haven't already, now's the time to migrate your project to Spring Boot 3.1!

![support-timelines.png](assets%2Fsupport-timelines.png)

This guide will help you migrate your own project to Spring Boot 3.1.
You've already seen various ways of running OpenRewrite recipes by now;
pick the one that best suits your project for this migration.
For a recap and detailed instructions see each of the indivual exercises:

- [Maven plugin](../maven-plugin)
- [Gradle plugin](../gradle-plugin)
- [Moderne CLI](../moderne-cli)
- [Spring Tools](../spring-tools)
- [Spring Boot Migrator](../spring-boot-migrator)

You will want to [run the VERSION_MIGRATE_SPRING_BOOT recipe](https://docs.openrewrite.org/recipes/java/spring/boot3/VERSION_LINK_SPRING_BOOT).

## Helpful resources

Here's a number of links that might be helpful in case you encounter edge cases not yet covered:
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Release-Notes
- https://github.com/spring-projects/spring-boot/wik
