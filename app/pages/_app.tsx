import { SSRProvider } from 'react-bootstrap';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '@/components/layout/Layout';
import { CasUserContextProvider } from '@/access/useCasUserContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <CasUserContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CasUserContextProvider>
        </SSRProvider>
    );
}

export default MyApp
