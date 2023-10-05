import { Button } from 'react-bootstrap';
import Role from '@/access/Role';
import useCas from '@/access/useCas';
import useCasUserContext from '@/access/useCasUserContext';

const Login = () => {
    const cas = useCas();
    const casUserContext = useCasUserContext();

    return (
        <>
            {!casUserContext.currentUser.roles.includes(Role.USER)
                ? <Button onClick={() => cas.login()}>Login</Button>
                : <Button onClick={() => cas.logout()}>Logout ({casUserContext.currentUser.uid})</Button>}
        </> 
    );
}

export default Login;
