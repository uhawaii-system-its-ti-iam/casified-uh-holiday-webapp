'use client';

import { Button } from '@mantine/core';
import Role from '@/access/Role';
import User from '@/access/User';
import { login, logout } from '@/access/AuthenticationService';

const LoginButton = ({ 
    currentUser 
}: {
    currentUser: User;
}) => (
    <>
        {!currentUser.roles.includes(Role.UH)
            ? <Button variant="default" onClick={() => login()}>Login</Button>
            : <Button variant="filled" onClick={() => logout()}>Logout ({currentUser.uid})</Button>}
    </> 
);

export default LoginButton;
