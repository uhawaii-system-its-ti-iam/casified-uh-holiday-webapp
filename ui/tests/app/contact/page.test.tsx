import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

describe ('ContactPage', () => {

    it('should render a Contact Us header and the Contact Accordion', () => {
        render(<ContactPage />);

        expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'For General Help/How-To Questions' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Reporting Technical Issues/Problems' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Information Technology Services' })).toBeInTheDocument();
    });

    it('should render contact information in each accordion dropdown', () => {
        render(<ContactPage />);

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
