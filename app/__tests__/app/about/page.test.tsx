import { screen } from '@testing-library/react';
import AboutPage from 'app/about/page';
import { renderWithProviders } from 'jest.setup';

describe('AboutPage', () => {
    
    it('should render a Frequently Asked Questions header and the Faq Accordion', () => {
        renderWithProviders(<AboutPage />);
        
        expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument();
        expect(screen.getByTestId('faq-accordion')).toBeInTheDocument();
    });

});
