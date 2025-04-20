import './globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
    children
}: {
  children?: React.ReactNode
}) {
    const isTestEnvironment = process.env.NODE_ENV === 'test';

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

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                {isTestEnvironment ? content : content}
            </body>
        </html>
    );
}