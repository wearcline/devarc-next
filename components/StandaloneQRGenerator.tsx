"use client";

import React, { useState } from 'react';
import { Download, RefreshCw, Type } from 'lucide-react';

export default function StandaloneQRGenerator() {
    const [data, setData] = useState('');
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [isPreviewing, setIsPreviewing] = useState(false);

    const handleGenerate = () => {
        if (!data) return;
        setIsPreviewing(true);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1 flex items-center gap-2">
                    <Type size={14} className="text-accent" />
                    매핑 데이터 (URL/Text)
                </label>
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="데이터 입력..."
                    className="pro-input"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">배경 색상</label>
                    <div className="flex gap-3 items-center bg-white/5 p-3 rounded-2xl border border-white/5 transition-all focus-within:border-accent">
                        <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-none"
                        />
                        <span className="text-sm font-mono font-bold uppercase">{bgColor}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">패턴 색상</label>
                    <div className="flex gap-3 items-center bg-white/5 p-3 rounded-2xl border border-white/5 transition-all focus-within:border-accent">
                        <input
                            type="color"
                            value={fgColor}
                            onChange={(e) => setFgColor(e.target.value)}
                            className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-none"
                        />
                        <span className="text-sm font-mono font-bold uppercase">{fgColor}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={handleGenerate}
                className="primary-btn w-full"
            >
                고화질 QR 생성하기
            </button>

            {isPreviewing && (
                <div className="mt-10 p-10 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center animate-fade">
                    <div className="w-48 h-48 bg-white rounded-2xl p-4 shadow-2xl mb-8 group relative overflow-hidden">
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center font-black text-slate-300">PREVIEW</div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all">
                            <RefreshCw size={18} />
                            <span>다시 생성</span>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-2xl font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-all">
                            <Download size={18} />
                            <span>이미지 저장</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
