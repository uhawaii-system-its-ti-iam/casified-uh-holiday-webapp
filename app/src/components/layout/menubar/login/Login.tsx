import { Button } from 'react-bootstrap';
import Role from 'src/access/Role';
import useCas from 'src/access/useCas';
import useCasUserContext from 'src/access/useCasUserContext';

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
