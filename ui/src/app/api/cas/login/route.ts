import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { handleLogin } from '@/access/authentication';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const GET = async (req: NextRequest) => {
    const ticket = req.nextUrl.searchParams.get('ticket') as string;
    await handleLogin(ticket);
    redirect(baseUrl);
}
