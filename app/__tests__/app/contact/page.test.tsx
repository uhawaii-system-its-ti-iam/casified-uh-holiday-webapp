import { render, screen } from '@testing-library/react';
import ContactPage from 'app/contact/page';

describe ('ContactPage', () => {

    beforeEach(() => {
        render(<ContactPage />);
    });

    it('should render a Contact Us header and the Contact Table', () => {
        expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument;
        expect(screen.getByLabelText('Contact Table')).toBeInTheDocument;
        expect(screen.getByRole('table')).toBeInTheDocument;
    });
    
});
