"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Link2,
    FileText,
    Image as ImageIcon,
    QrCode,
    Settings,
    LogOut
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: '종합 대시보드', icon: LayoutDashboard, href: '/dashboard' },
    { name: '단축 링크 관리', icon: Link2, href: '/dashboard/links' },
    { name: '약관 및 정책', icon: FileText, href: '/dashboard/policies' },
    { name: '이미지 클라우드', icon: ImageIcon, href: '/dashboard/media' },
    { name: 'QR 브랜딩 센터', icon: QrCode, href: '/dashboard/qr' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-card/40 backdrop-blur-2xl border-r border-white/5 flex flex-col p-8 z-50">
            <div className="flex items-center gap-3 mb-12 px-2">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_var(--accent-glow)]">
                    <Link2 className="text-white" size={24} />
                </div>
                <div>
                    <h1 className="text-lg font-black tracking-tighter">ARC HUB</h1>
                    <p className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase opacity-80">Next Gen Admin</p>
                </div>
            </div>

            <nav className="flex-grow space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300",
                                isActive
                                    ? "bg-accent text-white shadow-[0_10px_30px_rgba(0,118,255,0.3)]"
                                    : "text-text-secondary hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon size={22} className={cn(
                                "transition-transform group-hover:scale-110",
                                isActive ? "text-white" : "text-text-secondary group-hover:text-accent"
                            )} />
                            <span className="font-semibold text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto space-y-2">
                <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-text-secondary hover:bg-white/5 transition-all"
                >
                    <Settings size={22} />
                    <span className="font-semibold text-sm">시스템 설정</span>
                </Link>
                <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-danger hover:bg-danger/10 transition-all">
                    <LogOut size={22} />
                    <span className="font-semibold text-sm">로그아웃</span>
                </button>
            </div>
        </aside>
    );
}
