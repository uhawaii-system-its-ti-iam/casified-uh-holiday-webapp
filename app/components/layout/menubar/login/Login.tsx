'use client';

import { Button } from 'react-bootstrap';
import Role from '@/access/Role';
import User from '@/access/User';
import { login, logout } from '@/access/AuthenticationService';

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
