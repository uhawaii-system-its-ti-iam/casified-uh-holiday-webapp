import { Dispatch, SetStateAction, ReactNode, createContext, useContext, useState } from 'react';
import User, { AnonymousUser } from './User';

const CasUserContext = createContext<{
    currentUser: User,
    setCurrentUser: Dispatch<SetStateAction<User>> 
} | undefined>(undefined);

export const CasUserContextProvider = ({children}: {children: ReactNode}) => {
    const [currentUser, setCurrentUser] = useState(AnonymousUser);

    return (
        <CasUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CasUserContext.Provider>
    );
}

const useCasUserContext = () => {
    const casUserContext = useContext(CasUserContext);
    if (casUserContext === undefined) {
        throw new Error('useCasUserContext must be used within a <CasUserContext />');
    }
    return casUserContext;
}

export default useCasUserContext;
