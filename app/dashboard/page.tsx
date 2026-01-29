import React from 'react';
import { MousePointer2, Link2, Image as ImageIcon, Activity } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

// This would be a Client Component in a real setup to handle ApexCharts
// For migration, we'll create a placeholder or a separate component
import ClickTrendChart from '@/components/ClickTrendChart';
import ActivityFeed from '@/components/ActivityFeed';

export default async function DashboardPage() {
    // In a real Next.js app, we would fetch data here:
    // const totalLinks = await prisma.shortLink.count();
    // const totalClicks = await prisma.shortLink.aggregate({ _sum: { clickCount: true } });

    const stats = {
        totalLinks: 124,
        totalClicks: "12.8k",
        totalMedia: 48,
        activeNow: 12
    };

    return (
        <div className="space-y-10">
            <header>
                <h2 className="text-4xl font-black tracking-tighter mb-2">Welcome Back, Admin</h2>
                <p className="text-text-secondary font-medium">실시간 서비스 현황과 분석 지표를 확인하세요.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard label="전체 단축 링크" value={stats.totalLinks} icon={Link2} variant="pink" />
                <StatsCard label="누적 클릭수" value={stats.totalClicks} icon={MousePointer2} variant="blue" />
                <StatsCard label="호스팅 미디어" value={stats.totalMedia} icon={ImageIcon} variant="green" />
                <StatsCard label="실시간 접속" value={stats.activeNow} icon={Activity} variant="orange" />
            </div>

            {/* Analytics Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ClickTrendChart />
                </div>
                <div className="lg:col-span-1">
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
}
