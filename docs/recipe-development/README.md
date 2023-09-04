---
sidebar_position: 9
---

# Recipe development

The Java ecosystem is vast, and continuously evolving. As such, it's possible OpenRewrite does not yet cover some parts
of your migration. We're always looking for help to expand the coverage of migration recipes, and we've made it as easy
as possible to get started with recipe development.

Should you find any parts of your migration are not yet covered, then the first thing to check is whether there is
already a corresponding [issue on the backlog](https://github.com/orgs/openrewrite/projects/4/views/10), perhaps
with some pointers on an implementation. If not, you
can [create a new issue](https://github.com/openrewrite/rewrite-spring/issues/new/choose) to discuss the recipe you'd
like to develop. Note that there are separate modules for Spring recipes, Java recipes, testing recipes, logging
recipes, and many more. It helps to browse the existing modules for any related work that might be similar and start
from there.

## Types of recipes

If there's no existing recipe that covers your use case, then you can write your own.
There are three types of recipes you can write, each with their own tradeoffs.

1. [Declarative recipes](https://docs.openrewrite.org/reference/yaml-format-reference) are the simplest to write, and
   are the most common type of recipe. They
   are written in YAML, and often tie together existing recipe building blocks with some light configuration.
2. [Refaster rules](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.10/src/main/java/org/openrewrite/java/migrate/apache/commons/lang/ApacheCommonsStringUtils.java#L168-L178)
   bring you the benefit of compiler support, and work best for straightforward replacements. They generate recipes that
   can also be used as a starting point for more complex recipe implementations.
3. [Imperative recipes](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe) are the most
   powerful, and allow you to write Java code to implement your recipe.
   By [using the `JavaTemplate` builder](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate),
   you can keep complexity down, as you define arbitrary code changes.

No matter which method of recipe development you choose, you can
always [write unit tests for your recipe](https://docs.openrewrite.org/authoring-recipes/recipe-testing).
Beyond that there
are [best practices for writing recipes](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices),
such as ensuring idempotence, and avoiding harmful changes.
In rare cases, such as with Spring, you might need
to [use multiple versions of a dependency](https://docs.openrewrite.org/authoring-recipes/multiple-versions).
When you get started, be sure to set up the
recommended [recipe development environment](https://docs.openrewrite.org/authoring-recipes/recipe-development-environment).

## Packaging recipes for use

Once you've written your recipe, you can package it up for use in your own project, or to share with others.
The [Rewrite recipe starter](https://github.com/moderneinc/rewrite-recipe-starter) serves as a template for packaging
and distributing recipes. It includes a sample recipe, and a Gradle build that packages the recipe as a JAR file. From
there you can follow the instructions in the README to publish the recipe to a Maven repository, or to use it in your
projects.

If you have any internally shared libraries or frameworks within your organization, an artifact with migration recipes
is a good way to start automating changes. You can even leverage all the existing OpenRewrite recipes, merely by adding
them as a dependency.

## Contributing to OpenRewrite

If you'd like
to [contribute your recipe to OpenRewrite](https://github.com/openrewrite/.github/blob/main/CONTRIBUTING.md), we'd love
to have it! We'll help review, develop, and distribute your recipe, and note you as the author in the recipe catalog.

If you don't particularly have one of your own recipes to contribute, but would like to help out, then you can also have
a look
at [issues labeled Good-First-Issue](https://github.com/orgs/openrewrite/projects/4/views/10?filterQuery=label%3A%22good+first+issue%22).
