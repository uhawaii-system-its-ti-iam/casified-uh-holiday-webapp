import { loadEnvConfig } from '@next/env';
import { enableFetchMocks } from 'jest-fetch-mock';
import { MantineProvider } from '@mantine/core';
import User from '@/access/User';
import { RenderOptions, render } from '@testing-library/react';
import { ModalsProvider } from '@mantine/modals';
import HolidayModal from '@/components/modals/holiday_modal/HolidayModal';

enableFetchMocks();
loadEnvConfig(process.cwd());

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
  
const providers = ({
    children
} : {
    children: React.ReactNode
}) => (
    <MantineProvider defaultColorScheme="light">
        <ModalsProvider modals={{ holiday: HolidayModal }}>
            {children}
        </ModalsProvider>
    </MantineProvider>
);

export const renderWithProviders = (
    ui: React.ReactElement, 
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: providers, ...options});

export const createMockSession = (user: User | undefined) => ({
    user,
    destroy: jest.fn(),
    save: jest.fn(),
    updateConfig: jest.fn()
});
