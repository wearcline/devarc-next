"use client";

import React, { useState } from 'react';
import { Plus, Trash2, Palette } from 'lucide-react';

const mockProfiles = [
    { id: 1, name: 'Arcline Standard', fg: '#000000', bg: '#ffffff', isDefault: true },
    { id: 2, name: 'Dark Premium', fg: '#ffffff', bg: '#08090d', isDefault: false },
    { id: 3, name: 'Corporate Blue', fg: '#0076ff', bg: '#ffffff', isDefault: false },
];

export default function QRProfileManager() {
    return (
        <div className="space-y-8">
            {/* Create New Profile */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-text-secondary flex items-center gap-2">
                    <Palette size={16} className="text-accent" />
                    신규 프리셋 추가
                </h4>
                <div className="space-y-4">
                    <input type="text" placeholder="프리셋 이름 (예: 프로모션용)" className="pro-input py-3" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <input type="color" className="w-8 h-8 rounded-lg cursor-pointer bg-transparent" />
                            <span className="text-[10px] font-bold">배경색</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <input type="color" className="w-8 h-8 rounded-lg cursor-pointer bg-transparent" />
                            <span className="text-[10px] font-bold">패턴색</span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-accent/20 text-accent font-black text-sm rounded-xl hover:bg-accent hover:text-white transition-all">
                        프리셋 저장
                    </button>
                </div>
            </div>

            <hr className="opacity-5" />

            {/* Profile List */}
            <div className="space-y-4">
                {mockProfiles.map((p) => (
                    <div key={p.id} className="group flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center p-1.5"
                                style={{ backgroundColor: p.bg }}
                            >
                                <div className="w-full h-full rounded shadow-sm" style={{ backgroundColor: p.fg }} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm flex items-center gap-2">
                                    {p.name}
                                    {p.isDefault && <span className="bg-accent/10 text-accent text-[8px] px-2 py-0.5 rounded-full uppercase">Default</span>}
                                </h5>
                                <p className="text-[10px] text-text-secondary font-mono uppercase">{p.fg} on {p.bg}</p>
                            </div>
                        </div>
                        {!p.isDefault && (
                            <button className="icon-btn text-text-secondary hover:text-danger opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 size={16} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
