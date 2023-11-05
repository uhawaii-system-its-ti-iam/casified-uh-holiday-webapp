import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '@/components/layout/Layout';
import { CasUserContextProvider } from '@/access/useCasUserContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CasUserContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CasUserContextProvider>
    );
}

export default MyApp
