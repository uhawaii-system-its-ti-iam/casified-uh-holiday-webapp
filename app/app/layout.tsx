import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menubar from '@/components/layout/menubar/Menubar';
import Footer from '@/components/layout/footer/Footer';

const RootLayout = ({ 
    children
}: {
    children?: React.ReactNode
}) => (
    <html lang="en">  
        <body>
            <Menubar />
            {children}
            <Footer />
        </body>
    </html>
);

export default RootLayout;
