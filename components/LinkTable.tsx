"use client";

import React, { useState } from 'react';
import { Copy, Trash2, ExternalLink, Lock, Calendar } from 'lucide-react';

const mockLinks = [
    { id: 1, code: 'marketing', url: 'https://google.com/search?q=very-long-url-example', clicks: 124, status: 'Active', expiry: '2026-12-31', tags: ['sns', 'google'], hasPassword: true },
    { id: 2, code: 'promotion', url: 'https://apple.com/iphone-15-pro-max', clicks: 89, status: 'Active', expiry: 'none', tags: ['hardware'], hasPassword: false },
    { id: 3, code: 'event', url: 'https://arclinedev.iptime.org/event/2026', clicks: 231, status: 'Expired', expiry: '2025-01-01', tags: ['internal'], hasPassword: false },
];

export default function LinkTable() {
    const [selected, setSelected] = useState<Set<number>>(new Set());

    const toggleAll = () => {
        if (selected.size === mockLinks.length) setSelected(new Set());
        else setSelected(new Set(mockLinks.map(l => l.id)));
    };

    const toggleOne = (id: number) => {
        const next = new Set(selected);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setSelected(next);
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-text-secondary text-xs font-bold uppercase tracking-widest bg-white/[0.02]">
                        <th className="px-8 py-5 w-16">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-white/10 bg-white/5 accent-accent"
                                checked={selected.size === mockLinks.length}
                                onChange={toggleAll}
                            />
                        </th>
                        <th className="px-4 py-5 font-black">QR</th>
                        <th className="px-4 py-5 font-black">Link / Tags</th>
                        <th className="px-4 py-5 font-black">Destination</th>
                        <th className="px-4 py-5 font-black">Clicks</th>
                        <th className="px-4 py-5 font-black">Status</th>
                        <th className="px-8 py-5 text-right font-black">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {mockLinks.map((link) => (
                        <tr
                            key={link.id}
                            className={`hover:bg-white/[0.02] transition-colors group ${selected.has(link.id) ? 'bg-accent/5' : ''}`}
                        >
                            <td className="px-8 py-6">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-white/10 bg-white/5 accent-accent"
                                    checked={selected.has(link.id)}
                                    onChange={() => toggleOne(link.id)}
                                />
                            </td>
                            <td className="px-4 py-6">
                                <div className="w-12 h-12 bg-white rounded-xl overflow-hidden p-1 group-hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">QR</div>
                                </div>
                            </td>
                            <td className="px-4 py-6">
                                <div className="flex flex-col gap-1.5">
                                    <span className="font-bold text-white tracking-tight">/s/{link.code}</span>
                                    <div className="flex gap-1">
                                        {link.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-text-secondary border border-white/5">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-6">
                                <div className="flex items-center gap-2 group/link cursor-pointer max-w-[200px]">
                                    <span className="text-xs text-text-secondary truncate group-hover/link:text-white transition-colors">{link.url}</span>
                                    <ExternalLink size={12} className="text-text-secondary group-hover/link:text-accent flex-shrink-0" />
                                </div>
                            </td>
                            <td className="px-4 py-6 text-sm font-black text-white">{link.clicks}</td>
                            <td className="px-4 py-6">
                                <div className="flex flex-col gap-1">
                                    <span className={`text-[10px] font-black uppercase tracking-wider ${link.status === 'Active' ? 'text-success' : 'text-danger'}`}>
                                        ● {link.status === 'Active' ? 'Active' : 'Expired'}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[10px] text-text-secondary font-medium">
                                        <Calendar size={10} />
                                        <span>{link.expiry === 'none' ? 'Unlimited' : link.expiry}</span>
                                        {link.hasPassword && <Lock size={10} className="text-accent ml-1" />}
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-6">
                                <div className="flex justify-end gap-2">
                                    <button className="icon-btn hover:text-accent">
                                        <Copy size={16} />
                                    </button>
                                    <button className="icon-btn hover:text-danger">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selected.size > 0 && (
                <div className="p-4 bg-accent text-white flex justify-between items-center rounded-b-3xl animate-fade">
                    <span className="font-bold text-sm ml-4">{selected.size}개의 링크가 선택되었습니다.</span>
                    <div className="flex gap-2 mr-4">
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-xs transition-all">만료일 수정</button>
                        <button className="px-4 py-2 bg-danger hover:bg-danger/80 rounded-xl font-bold text-xs transition-all">선택 삭제</button>
                    </div>
                </div>
            )}
        </div>
    );
}
