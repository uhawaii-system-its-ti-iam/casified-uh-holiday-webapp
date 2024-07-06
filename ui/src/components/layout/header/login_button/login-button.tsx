'use client';

import { Button } from '@/components/ui/button'
import { IconLogin2, IconLogout } from '@tabler/icons-react';
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
            ? <Button variant="outline" onClick={() => login()}>Login <IconLogin2 /></Button>
            : <Button onClick={() => logout()}>Logout ({currentUser.uid})&nbsp;<IconLogout /></Button>}
    </> 
);

export default LoginButton;
