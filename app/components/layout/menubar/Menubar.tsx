import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import CampusDropdown from './campus-dropdown/CampusDropdown';

const Menubar = () => {
    return ( 
        <Navbar fixed="top" expand="md">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand>
                        <Image src="/holiday/seal.svg" alt="" fill quality={100} />
                        <p className="uh-nav-app-name">hawaii.edu/holidays</p>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
                        <Link href="/contact" passHref legacyBehavior><Nav.Link>Contact</Nav.Link></Link>
                        <Link href="/faq" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
                        <CampusDropdown />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Menubar;
