import React from 'react';
import { LucideIcon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface StatsCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    variant?: 'pink' | 'blue' | 'green' | 'orange';
}

const variants = {
    pink: "bg-pink-500/10 text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.2)]",
    blue: "bg-blue-500/10 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    green: "bg-emerald-500/10 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    orange: "bg-orange-500/10 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)]",
};

export default function StatsCard({ label, value, icon: Icon, variant = 'blue' }: StatsCardProps) {
    return (
        <div className="glass-container p-8 flex items-center justify-between group">
            <div>
                <p className="text-text-secondary text-sm font-semibold mb-1">{label}</p>
                <h3 className="text-3xl font-black tracking-tighter group-hover:scale-105 transition-transform origin-left">{value}</h3>
            </div>
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", variants[variant])}>
                <Icon size={28} />
            </div>
        </div>
    );
}
