#!/bin/bash
set -e

inverse="$1"

# Replace the version place holders in each doc file with their corresponding value
function replace() {
  if [ -n "$inverse" ]; then
    grep --recursive --files-with-matches "$2" docs | xargs --no-run-if-empty sed --in-place "s/$2/$1/g"
  else
    grep --recursive --files-with-matches "$1" docs | xargs --no-run-if-empty sed --in-place "s/$1/$2/g"
  fi
}
replace 'VERSION_SDKMAN_JAVA8'            '8.0.392-zulu'
replace 'VERSION_SDKMAN_JAVA11'           '11.0.21-tem'
replace 'VERSION_SDKMAN_JAVA17'           '17.0.9-tem'
replace 'VERSION_SPRING_BOOT27'           '2.7.17'
replace 'VERSION_SPRING_BOOT31'           '3.1.5'
replace 'VERSION_REWRITE_GRADLE_PLUGIN'   '6.4.4'
replace 'VERSION_REWRITE_MAVEN_PLUGIN'    '5.10.0'
replace 'VERSION_REWRITE_SPRING'          '5.0.12'
replace 'VERSION_RECIPE_SPRING_BOOT'      'UpgradeSpringBoot_3_1'
replace 'VERSION_MIGRATE_SPRING_BOOT'     'Migrate to Spring Boot 3.1'
replace 'VERSION_LINK_SPRING_BOOT'        'upgradespringboot_3_1'
replace 'VERSION_MODERNE_CLI'             'v1.6.1'

if [ -n "$inverse" ]; then
  echo "Replaced all versions with placeholders"
else
  echo "Replaced all placeholders with versions"
  echo "Please remember to restore the placeholders before committing"
fi
