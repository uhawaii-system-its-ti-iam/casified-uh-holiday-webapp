import crypto from 'crypto';
import { loadEnvConfig } from '@next/env';
import { enableFetchMocks } from 'jest-fetch-mock';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRequest, createResponse } from 'node-mocks-http';

enableFetchMocks();
loadEnvConfig(process.cwd());

console.error = (err) => { 
    throw new Error(err); 
};

Object.defineProperty(globalThis, 'crypto', {
    value: {
        subtle: crypto.webcrypto.subtle,
    }
});

Object.defineProperty(window, 'location', {
    value: new URL(window.location.href)
});

export type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
export type ApiResponse = NextApiResponse & ReturnType<typeof createResponse>;
