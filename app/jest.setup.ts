import { loadEnvConfig } from '@next/env';
import { enableFetchMocks } from 'jest-fetch-mock';
import User from '@/access/User';

enableFetchMocks();
loadEnvConfig(process.cwd());

export const createMockSession = (user: User | undefined) => ({
    user,
    destroy: jest.fn(),
    save: jest.fn(),
    updateConfig: jest.fn()
});
