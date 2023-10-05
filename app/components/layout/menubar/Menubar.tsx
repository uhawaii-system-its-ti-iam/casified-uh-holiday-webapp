import CampusDropdown from './campus-dropdown/CampusDropdown';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useCasUserContext from '@/access/useCasUserContext';
import Image from 'next/image';
import Link from 'next/link';
import Login from './login/Login';
import Role from '@/access/Role';

const Menubar = () => {
    const casUserContext = useCasUserContext();
    
    return ( 
        <Navbar fixed="top" expand="md">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand>
                        <Image src="/holiday/seal.svg" alt="" role="img" fill quality={100} />
                        <p className="uh-nav-app-name">hawaii.edu/holidays</p>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
                        {casUserContext.currentUser.roles.includes(Role.USER) 
                            && <Link href="/contact" passHref legacyBehavior><Nav.Link>Contact</Nav.Link></Link>}
                        <Link href="/faq" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
                        <CampusDropdown />
                        <Login />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Menubar;
