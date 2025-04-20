'use client';

import { Button } from '@/components/ui/button'
import { LogIn, LogOut } from 'lucide-react';
import Role from '@/access/role';
import User from '@/access/user';
import { login, logout } from '@/access/authentication';

const LoginButton = ({ 
    currentUser 
}: {
    currentUser: User;
}) => (
    <>
        {!currentUser.roles.includes(Role.UH)
            ? <Button variant="golden" onClick={() => login()}>Login <LogIn /></Button>
            : <Button onClick={() => logout()}>Logout ({currentUser.uid})&nbsp;<LogOut /></Button>}
    </> 
);

export default LoginButton;
