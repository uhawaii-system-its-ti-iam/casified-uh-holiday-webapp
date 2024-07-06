import UHBrand from '@/components/layout/header/uh_brand/uh-brand';
import { render, screen } from '@testing-library/react';

describe('UHBrand', () => {

    it('should render the UHBrand', () => {
        render(<UHBrand />);

        expect(screen.getByRole('img')).toHaveAttribute('src', '/holiday/seal.svg');
        expect(screen.getByText('UH Holidays')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'logo UH Holidays' })).toHaveAttribute('href', '/');
    });
});
