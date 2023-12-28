import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/ColorSchemeToggle';
import { MantineProvider, useComputedColorScheme } from '@mantine/core';
import { renderHook, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'jest.setup';

describe('ColorSchemeToggle', () => {

    it('should render the ColorSchemeToggle', () => {
        renderWithProviders(<ColorSchemeToggle />);

        expect(screen.getByRole('button', {name: 'Toggle color scheme'})).toBeInTheDocument();
        expect(screen.getByTestId('icon-sun')).toHaveClass('mantine-hidden-light');
        expect(screen.getByTestId('icon-moon')).toHaveClass('mantine-hidden-dark');
    });

    it('should change the theme onClick', () => {
        renderWithProviders(<ColorSchemeToggle />);

        const wrapper = ({ children }: { children: React.ReactNode }) => 
            <MantineProvider defaultColorScheme="light">{ children }</MantineProvider>

        let view = renderHook(useComputedColorScheme, { wrapper });
        expect(view.result.current).toBe('light');

        fireEvent.click(screen.getByRole('button', {name: 'Toggle color scheme'})); 
        
        view = renderHook(useComputedColorScheme, { wrapper });
        expect(view.result.current).toBe('dark');

        fireEvent.click(screen.getByRole('button', {name: 'Toggle color scheme'})); 

        view = renderHook(useComputedColorScheme, { wrapper });
        expect(view.result.current).toBe('light');
    });

});
