import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/footer/Footer';

describe ('Footer', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    it('should render a footer that contains the string: University of Hawai‘i', () => {
        expect(screen.getByRole('contentinfo')).toBeInTheDocument;
        expect(screen.getByText('University')).toBeInTheDocument;
        expect(screen.getByText('of')).toBeInTheDocument;
        expect(screen.getByText('Hawai‘i')).toBeInTheDocument;
    });
});
