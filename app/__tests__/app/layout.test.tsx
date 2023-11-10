import { render, screen } from '@testing-library/react';
import Layout from 'app/layout';

/**
    Mocks Menubar located in @/components/layout/menubar/__mocks__/Menubar.
    Workaround because React Testing Library does not support rendering server components.
*/
jest.mock('@/components/layout/menubar/Menubar'); 

describe ('Layout', () => { 

    beforeEach(() => {
        render(<Layout><p>Hello World!</p></Layout>);
    });

    it('should render the menubar and footer', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should render components nested inside between the menubar and footer', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();

        expect(screen.getByRole('navigation').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(4);
        expect(screen.getByRole('contentinfo').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(2);
    });

});
