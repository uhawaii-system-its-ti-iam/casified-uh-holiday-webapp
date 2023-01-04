import { render, screen } from '@testing-library/react';
import Contact from 'pages/contact';

describe ('Contact', () => {
    beforeEach(() => {
        render(<Contact />);
    });

    it('should render a Contact Us header and the Contact Table', () => {
        expect(screen.getByText('Contact Us')).toBeInTheDocument;
        expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument;
        expect(screen.getByLabelText('Contact Table')).toBeInTheDocument;
        expect(screen.getByRole('table')).toBeInTheDocument;
    })
});
