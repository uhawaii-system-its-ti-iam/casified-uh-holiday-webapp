import { render, screen } from '@testing-library/react';
import Layout from '@components/layout/Layout';

describe ('Layout', () => {
    it('should render the menubar and footer', () => {
        render(<Layout />);
        expect(screen.getByRole('navigation')).toBeInTheDocument;
        expect(screen.getByRole('contentinfo')).toBeInTheDocument;
    });

    it('should render components nested inside between the menubar and footer', () => {
        render(
            <Layout>
                <p>Hello World!</p>
            </Layout>
        );
        
        expect(screen.getByRole('navigation')).toBeInTheDocument;
        expect(screen.getByText('Hello World!'));
        expect(screen.getByRole('contentinfo')).toBeInTheDocument;

        expect(screen.getByRole('navigation').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(4);
        expect(screen.getByRole('contentinfo').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(2);
    });
});
