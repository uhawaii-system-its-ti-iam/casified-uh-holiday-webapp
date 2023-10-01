import Menubar from "./menubar/Menubar";
import Footer from "./footer/Footer";

interface LayoutProps {
    children? : React.ReactNode
}

const Layout = ({children}: LayoutProps ) => {
    return ( 
        <div>
            <Menubar />
            { children }
            <Footer />
        </div> 
    );
}
 
export default Layout;
