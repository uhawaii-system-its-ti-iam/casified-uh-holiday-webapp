import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/footer/footer';

describe ('Footer', () => {

    it('should render a footer that contains the string: University of Hawai‘i', () => {
        render(<Footer />);

        expect(screen.getByRole('contentinfo')).toBeInTheDocument;
        expect(screen.getByText('UNIVERSITY')).toBeInTheDocument;
        expect(screen.getByText('of')).toBeInTheDocument;
        expect(screen.getByText('HAWAI‘I')).toBeInTheDocument;
    });
    
});
