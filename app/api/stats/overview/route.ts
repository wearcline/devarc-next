import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { subDays, format } from 'date-fns';

export async function GET() {
    try {
        const totalLinks = await prisma.shortLink.count();

        const clickAggregation = await prisma.shortLink.aggregate({
            _sum: { clickCount: true }
        });
        const totalClicks = clickAggregation._sum.clickCount || 0;

        const totalMedia = await prisma.image.count();

        // 최근 7일간의 클릭 트렌드
        const sevenDaysAgo = subDays(new Date(), 7);
        const clickLogs = await prisma.clickLog.findMany({
            where: {
                timestamp: { gte: sevenDaysAgo }
            },
            select: {
                timestamp: true
            }
        });

        // 날짜별 그룹화
        const trend: Record<string, number> = {};
        clickLogs.forEach(log => {
            const dateStr = format(log.timestamp, 'yyyy-MM-dd');
            trend[dateStr] = (trend[dateStr] || 0) + 1;
        });

        return NextResponse.json({
            total_links: totalLinks,
            total_clicks: totalClicks,
            total_media: totalMedia,
            click_trend: trend
        });
    } catch (error) {
        console.error('Stats API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
