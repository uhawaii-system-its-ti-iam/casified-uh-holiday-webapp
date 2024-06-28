/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
const os = require('os')

dotenv.config({path: `${os.homedir()}/.${os.userInfo().username}-conf/casified-uh-holiday-webapp-overrides.properties`})

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/holiday',
    experimental: {
        serverComponentsExternalPackages: ['camaro']
    }
}

module.exports = nextConfig
