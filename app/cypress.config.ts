/* eslint-disable @typescript-eslint/no-var-requires */

import { defineConfig } from 'cypress';

const dotenv = require('dotenv');
const os = require('os');

dotenv.config({path: `${os.homedir()}/.${os.userInfo().username}-conf/casified-uh-holiday-webapp-overrides.properties`})

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        watchForFileChanges: false,
        env: {
            username: process.env.E2E_USERNAME,
            password: process.env.E2E_PASSWORD
        }
    },
});
