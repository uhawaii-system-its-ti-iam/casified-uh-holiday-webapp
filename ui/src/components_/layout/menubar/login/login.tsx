'use client';

import { Button } from 'react-bootstrap';
import Role from '@/access/role';
import User from '@/access/user';
import { login, logout } from '@/access/authentication-service';

const Login = ({ 
    currentUser 
}: {
    currentUser: User;
}) => (
    <>
        {!currentUser.roles.includes(Role.UH)
            ? <Button onClick={() => login()}>Login</Button>
            : <Button onClick={() => logout()}>Logout ({currentUser.uid})</Button>}
    </> 
);


export default Login;
