import React from 'react';
import StandaloneQRGenerator from '@/components/StandaloneQRGenerator';
import QRProfileManager from '@/components/QRProfileManager';
import { QrCode } from 'lucide-react';

export default function QRBrandingPage() {
    return (
        <div className="space-y-10">
            <header>
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shadow-[0_0_30px_var(--accent-glow)]">
                        <QrCode size={28} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-black tracking-tighter">QR 브랜딩 센터</h2>
                        <p className="text-text-secondary font-medium">고화질 QR 코드와 브랜딩 프리셋을 관리합니다.</p>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Standalone Generator */}
                <div className="glass-container p-8">
                    <h3 className="text-xl font-bold tracking-tight mb-8">커스텀 브랜딩 QR 생성</h3>
                    <StandaloneQRGenerator />
                </div>

                {/* Right: Profile Manager */}
                <div className="glass-container p-8">
                    <h3 className="text-xl font-bold tracking-tight mb-8">브랜딩 프리셋 관리</h3>
                    <QRProfileManager />
                </div>
            </div>
        </div>
    );
}
