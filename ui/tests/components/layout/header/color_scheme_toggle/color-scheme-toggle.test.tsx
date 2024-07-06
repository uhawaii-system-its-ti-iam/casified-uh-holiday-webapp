import userEvent from '@testing-library/user-event';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/color-scheme-toggle';
import { render, renderHook, screen, act } from '@testing-library/react';

describe('ColorSchemeToggle', () => {

    beforeAll(() => {
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));
    });

    it('should change the theme onClick', async () => {
        const user = userEvent.setup();

        const wrapper = ({ children }: { children: React.ReactNode }) =>
            <NextThemesProvider>{ children }</NextThemesProvider>

        render(<ColorSchemeToggle />, { wrapper });

        let view = renderHook(useTheme, { wrapper });
        expect(view.result.current.theme).toBe('system');

        await act(async () => {
            await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
        });

        await act(async () => {
            await user.click(screen.getByRole('menuitem', { name: 'Light' }));
        });

        view = renderHook(useTheme, { wrapper });
        expect(view.result.current.theme).toBe('light');

        await act(async () => {
            await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
        });

        await act(async () => {
            await user.click(screen.getByRole('menuitem', { name: 'Dark' }));
        });

        view = renderHook(useTheme, { wrapper });
        expect(view.result.current.theme).toBe('dark');
    });
});
