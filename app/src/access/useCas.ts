import { useEffect } from 'react';
import useCasUserContext from './useCasUserContext';

const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const useCas = () => {
    const casUserContext = useCasUserContext();

    useEffect(() => {
        fetch('/holiday/api/cas/current-user')
            .then(res => res.json())
            .then(user => casUserContext.setCurrentUser(user));
    }, []);

    const login = () => {
        window.location.href = `${casUrl}/login?service=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`; 
    };

    const logout = () => {
        window.location.href = `${casUrl}/logout?service=${encodeURIComponent(`${baseUrl}/api/cas/logout`)}`; 
    };

    return { login, logout };
}

export default useCas;
