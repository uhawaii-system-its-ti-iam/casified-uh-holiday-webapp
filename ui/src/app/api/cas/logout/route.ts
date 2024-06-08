import { redirect } from 'next/navigation';
import { handleLogout } from '@/access/authentication';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const GET = async () => {
    await handleLogout();
    redirect(baseUrl);
}
