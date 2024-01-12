import { screen } from '@testing-library/react';
import ContactPage from 'app/contact/page';
import { renderWithProviders } from 'jest.setup';

describe ('ContactPage', () => {

    it('should render a Contact Us header and the Contact Accordion', () => {
        renderWithProviders(<ContactPage />);

        expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
        expect(screen.getByTestId('contact-accordion')).toBeInTheDocument();
    });
    
});
