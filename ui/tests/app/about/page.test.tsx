import {render, screen} from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('AboutPage', () => {

    it('should render a Contact Us header and the Contact Accordion', () => {
        render(<AboutPage />);

        expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'General Questions' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Technologies' })).toBeInTheDocument();

        expect(screen.getAllByRole('button').length).toEqual(6);
    });
});
