import { ReactNode } from 'react';
import Menubar from "./menubar/Menubar";
import Footer from "./footer/Footer";

interface LayoutProps {
    children? : ReactNode
}

const Layout = ({children}: LayoutProps ) => {
    return ( 
        <>
            <Menubar />
            { children }
            <Footer />
        </> 
    );
}
 
export default Layout;
