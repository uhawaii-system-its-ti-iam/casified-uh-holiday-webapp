import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';
import { enableFetchMocks } from 'jest-fetch-mock';
import { ThemeProvider } from '@/components/theme-provider';
import User from '@/access/user';
import { RenderOptions, render } from '@testing-library/react';

enableFetchMocks();
loadEnvConfig(process.cwd());

const providers = ({
    children
} : {
    children: React.ReactNode
}) => (
    <ThemeProvider defaultTheme={"light"}>
        {children}
    </ThemeProvider>
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
