import { render, screen, fireEvent } from '@testing-library/react';
import ContactAccordion from '@/app/contact/_components/contact-accordion';

describe('ContactAccordion', () => {

    it('should render the ContactAccordion', () => {
        render(<ContactAccordion />);

        expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'For General Help/How-To Questions' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Reporting Technical Issues/Problems' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Information Technology Services' })).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toEqual(3);
    });

    it('should open and close when an accordion item is clicked', () => {
        render(<ContactAccordion />);

        const general = screen.getByRole('button', { name: 'For General Help/How-To Questions' });
        fireEvent.click(general);
        expect(screen.getByText('Send email:')).toBeInTheDocument();
        fireEvent.click(general);
        expect(screen.queryByText('Send email:')).toBe(null);

        const problems = screen.getByRole('button', { name: 'Reporting Technical Issues/Problems' });
        fireEvent.click(problems);
        expect(screen.getByText('Send email:')).toBeInTheDocument();
        fireEvent.click(problems);
        expect(screen.queryByText('Send email:')).toBe(null);

        const ITS = screen.getByRole('button', { name: 'Information Technology Services' });
        fireEvent.click(ITS);
        expect(screen.getByText('See:')).toBeInTheDocument();
        fireEvent.click(ITS);
        expect(screen.queryByText('See:')).toBe(null);
    });
});
