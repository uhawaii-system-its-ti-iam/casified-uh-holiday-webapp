/* eslint-disable @typescript-eslint/no-var-requires */

import { defineConfig } from "cypress";

const dotenv = require('dotenv');
const os = require('os');

dotenv.config({path: `${os.homedir()}/.${os.userInfo().username}-conf/casified-uh-holiday-webapp-overrides.properties`})

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: 'cypress/support/e2e.ts',
        watchForFileChanges: false,
        env: {
            username: process.env.E2E_USERNAME,
            password: process.env.E2E_PASSWORD,
            adminUsername: process.env.E2E_ADMIN_USERNAME,
            adminPassword: process.env.E2E_ADMIN_PASSWORD,
        }
    },
});
