import { ReactNode } from 'react';
import { act, render, renderHook , screen} from '@testing-library/react';
import useCasUserContext, { CasUserContextProvider } from '@/access/useCasUserContext';
import User, { AnonymousUser } from '@/access/User';

const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('CasUserContext', () => {

    describe('CasUserContextProvider', () => {
        it('should render all the children nested inside', () => {
            render(
                <CasUserContextProvider>
                    <p>Hello World!</p>
                </CasUserContextProvider>
            );

            expect(screen.getByText('Hello World!')).toBeInTheDocument;
        });
    });

    describe('useCasUserContext', () => {
        it('should return a useState to get and set the currentUser', () => {
            const wrapper = ({children}: {children: ReactNode}) => 
                <CasUserContextProvider>{children}</CasUserContextProvider>
            const { result } = renderHook(() => useCasUserContext(), { wrapper });

            expect(result.current.currentUser).toBe(AnonymousUser);
            act(() => result.current.setCurrentUser(testUser));
            expect(result.current.currentUser).toBe(testUser);
        });

        it('should throw an error when called outside of <CasUserContextProvider />', () => {
            expect(() => {
                renderHook(() => useCasUserContext())
            }).toThrow();
        });
    });

});
