import React from 'react';
import { PlusCircle, Trash2, ArrowRightLeft, UserPlus } from 'lucide-react';

const activities = [
    { id: 1, action: '링크 생성', details: 'arcline.me/s/marketing', time: '5 mins ago', icon: PlusCircle, color: 'text-success' },
    { id: 2, action: '로그인', details: '성공적으로 로그인함', time: '12 mins ago', icon: UserPlus, color: 'text-blue-500' },
    { id: 3, action: '링크 삭제', details: 'arcline.me/s/old-link', time: '45 mins ago', icon: Trash2, color: 'text-danger' },
    { id: 4, action: '리다이렉트', details: '/s/promo 클릭됨', time: '1 hour ago', icon: ArrowRightLeft, color: 'text-warning' },
];

export default function ActivityFeed() {
    return (
        <div className="glass-container p-8 h-full flex flex-col">
            <h3 className="text-xl font-bold tracking-tight mb-8">최근 활동 피드</h3>

            <div className="space-y-6 flex-grow">
                {activities.map((item) => (
                    <div key={item.id} className="flex gap-4 group cursor-pointer">
                        <div className={`mt-1 transition-transform group-hover:scale-125 ${item.color}`}>
                            <item.icon size={18} />
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-sm font-bold">{item.action}</span>
                                <span className="text-[10px] text-text-secondary font-medium">{item.time}</span>
                            </div>
                            <p className="text-xs text-text-secondary line-clamp-1">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-8 text-xs font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-widest text-center">
                View All Activity
            </button>
        </div>
    );
}
