'use client';

import { Button } from '@/components/ui/button'
import {IconLogin2} from '@tabler/icons-react';
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
            ? <Button className={"bg-cyan-600 ring-1 ring-cyan-800 text-white hover:bg-cyan-800"} onClick={() =>
                login()}>
              Login <IconLogin2 />
            </Button>
            : <Button variant="default" onClick={() => logout()}>Logout ({currentUser.uid})</Button>}
    </> 
);

export default LoginButton;
