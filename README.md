# casified-uh-holiday-webapp
Retool Frank's UH Holiday web app for React and CAS.  The initial purpose of this app is to provide the team with React experience before embarking on the UH Groupings 3.0 Epic.  The longer term purpose of this app is to provide new team members with a straightforward example of how the various frameworks used for the UH Groupings project interrelate.

# setup
1. cd into project directory and execute 'npm install' to install project packages

2. execute 'npm install --save axios' to install the Axios HTTP library

3. Execute './mvnw clean spring-boot:run' to check that the program launches correctly

# note for MacOS Developers
When you first clone the casified-uh-holiday-webapp repo to your local machine, if you execute './mvnw clean spring-boot:run', you may see 'zsh: permission denied: ./mvnw' You will have to update your permissions in order to execute maven commands. 

This can be done by executing 'chmod +x mvnw'