import { act, render, screen } from '@testing-library/react';
import Layout from '@/components/layout/Layout';
import { CasUserContextProvider } from '@/access/useCasUserContext';
import { AnonymousUser } from '@/access/User';

describe ('Layout', () => {
    beforeAll(() => {
        fetchMock.mockResponse(JSON.stringify(AnonymousUser));
    });

    it('should render the menubar and footer', async () => {
        await act(() => {
            render(
                <CasUserContextProvider>
                    <Layout />
                </CasUserContextProvider>
            );
        });
        
        expect(screen.getByRole('navigation')).toBeInTheDocument;
        expect(screen.getByRole('contentinfo')).toBeInTheDocument;
    });

    it('should render components nested inside between the menubar and footer', async () => {
        await act(() => {
            render(
                <CasUserContextProvider>
                    <Layout>
                        <p>Hello World!</p>
                    </Layout>
                </CasUserContextProvider>
            );
        });
        
        expect(screen.getByRole('navigation')).toBeInTheDocument;
        expect(screen.getByText('Hello World!')).toBeInTheDocument;
        expect(screen.getByRole('contentinfo')).toBeInTheDocument;

        expect(screen.getByRole('navigation').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(4);
        expect(screen.getByRole('contentinfo').compareDocumentPosition(screen.getByText('Hello World!'))).toBe(2);
    });
});
