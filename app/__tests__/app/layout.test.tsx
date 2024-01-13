import { render, screen } from '@testing-library/react';
import Layout from 'app/layout';

// Mock Header workaround because React Testing Library does not support rendering server components.
jest.mock('@/components/layout/header/Header'); 

describe ('Layout', () => { 

    it('should render the menubar and footer', () => {
        render(<Layout />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should render components nested inside between the menubar and footer', () => {
        render(<Layout><p>Hello World!</p></Layout>);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();

        expect(screen.getByRole('banner').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(4);
        expect(screen.getByRole('contentinfo').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(2);
    });

});
