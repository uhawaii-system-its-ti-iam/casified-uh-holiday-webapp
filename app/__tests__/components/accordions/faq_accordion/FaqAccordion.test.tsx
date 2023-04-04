import { render, screen, fireEvent } from '@testing-library/react';
import FaqAccordion from '@/components/accordions/faq_accordion/FaqAccordion';

describe('FaqAccordion', () => {

    it('should render the FaqAccordion', () => {
        render(<FaqAccordion />);

        expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'General Questions' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Technologies' })).toBeInTheDocument();

        expect(screen.getAllByRole('button').length).toEqual(6);
    });

    it('should open and close when an accordion item is clicked', () => {
        render(<FaqAccordion />);

        const general = screen.getByRole('button', {
            name: 'Who can answer some basic questions about the application?' 
        });
        fireEvent.click(general);
        expect(screen.getByText('Send an email to')).toBeInTheDocument();
        fireEvent.click(general);
        expect(screen.queryByText('Send an email to')).toBe(null);
    });
});
