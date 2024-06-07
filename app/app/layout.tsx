import './globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const RootLayout = ({
    children
}: {
  children?: React.ReactNode
}) => {
    const content = (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    );

    if (isTestEnvironment) {
        return content;
    }

    return (
        <html lang="en">
            <head />
            <body>
                {content}
            </body>
        </html>
    );
};

export default RootLayout;
