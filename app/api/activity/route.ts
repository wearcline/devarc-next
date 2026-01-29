import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { format } from 'date-fns';

export async function GET() {
    try {
        const logs = await prisma.activityLog.findMany({
            orderBy: { timestamp: 'desc' },
            take: 20
        });

        return NextResponse.json(logs.map(log => ({
            action: log.action,
            details: log.details,
            time: format(log.timestamp, 'HH:mm:ss'),
            date: format(log.timestamp, 'yyyy-MM-dd')
        })));
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
