import { ReactNode } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import useCas from '@/access/useCas';
import useCasUserContext, { CasUserContextProvider } from '@/access/useCasUserContext';
import User from '@/access/User';

const casUrl = process.env.NEXT_PUBLIC_CAS_URL as string;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const testUser: User = JSON.parse(process.env.TEST_USER_A as string);

describe('useCas', () => {
    const wrapper = ({children}: {children: ReactNode}) => <CasUserContextProvider>{children}</CasUserContextProvider>
    
    beforeAll(() => {
        fetchMock.mockResponse(JSON.stringify(testUser));
    });

    it('should make a fetch to get the currentUser on load', async () => {
        const { unmount } = renderHook(() => useCas(), { wrapper });
        expect(fetchMock.mock.calls[0][0]).toBe('/holiday/api/cas/current-user');
        unmount();
    });
    
    it('should store the fetched currentUser into the CasUserContext', async () => {
        const { result } = renderHook(() => {
            useCas()
            return useCasUserContext();
        }, { wrapper });
        await waitFor(() => expect(result.current.currentUser).toEqual(testUser));
    });

    it('should visit the CAS login url', async () => {
        const { result, unmount } = renderHook(() => useCas(), { wrapper });
        result.current.login()
        expect(window.location.href)
            .toBe(`${casUrl}/login?service=${encodeURIComponent(`${baseUrl}/api/cas/login`)}`);
        unmount();
    });
    
    it('should visit the CAS logout url', async () => {
        const { result, unmount } = renderHook(() => useCas(), { wrapper });
        result.current.logout();
        expect(window.location.href)
            .toBe(`${casUrl}/logout?service=${encodeURIComponent(`${baseUrl}/api/cas/logout`)}`);
        unmount();
    });

});
