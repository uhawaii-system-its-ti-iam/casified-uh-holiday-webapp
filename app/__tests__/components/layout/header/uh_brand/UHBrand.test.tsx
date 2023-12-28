import UHBrand from '@/components/layout/header/uh_brand/UHBrand';
import { renderWithProviders } from 'jest.setup';
import { screen } from '@testing-library/react';

describe('UHBrand', () => {

    it('should render the UHBrand', () => {
        renderWithProviders(<UHBrand />);

        expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
        expect(screen.getByText('UH Holidays')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toHaveAttribute('href', '/');
    });
});
