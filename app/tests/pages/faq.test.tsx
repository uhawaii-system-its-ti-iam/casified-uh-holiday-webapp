import { render, screen } from '@testing-library/react';
import Faq from 'pages/faq';

describe('Faq', () => {
    beforeEach(() => {
        render(<Faq />);
    });

    it('should render a Frequently Asked Questions header and the FAQ Table', () => {
        expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument;
        expect(screen.getByLabelText('FAQ Table')).toBeInTheDocument;
        expect(screen.getByRole('table')).toBeInTheDocument;
    });
});
