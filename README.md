# casified-uh-holiday-webapp
Retool Frank's UH Holiday web app for React and CAS.  The initial purpose of this app is to provide the team with React experience before embarking on the UH Groupings 3.0 Epic.  The longer term purpose of this app is to provide new team members with a straightforward example of how the various frameworks used for the UH Groupings project interrelate.

[![CI](https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp/actions/workflows/ci.yml/badge.svg)](https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp/actions/workflows/ci.yml)
![Jest coverage](https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp/blob/badges/badges/coverage-jest%20coverage.svg)
![Junit Coverage](https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp/blob/badges/badges/jacoco.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/72c3693804f0409797858b7e358f6421)](https://app.codacy.com/gh/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

# Setup
1.  From project directory, cd in /api and execute `./mvnw clean spring-boot:run` to launch API
2.  From project directory, cd into /app and execute `npm install` to install project packages
3.  Execute `npm run dev` to launch UI

# Note for MacOS Developers
When you first clone the casified-uh-holiday-webapp repo to your local machine, if you execute `./mvnw clean spring-boot:run`, you may see `zsh: permission denied: ./mvnw` You will have to update your permissions in order to execute maven commands. 

This can be done by executing `chmod +x mvnw`
