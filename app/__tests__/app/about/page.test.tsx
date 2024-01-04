import { render, screen } from '@testing-library/react';
import AboutPage from 'app/about/page';

describe('AboutPage', () => {
    
    beforeEach(() => {
        render(<AboutPage />);
    });

    it('should render a Frequently Asked Questions header and the FAQ Table', () => {
        expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument;
        expect(screen.getByLabelText('FAQ Table')).toBeInTheDocument;
        expect(screen.getByRole('table')).toBeInTheDocument;
    });

});
