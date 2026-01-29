import React from 'react';
import LinkTable from '@/components/LinkTable';
import { Plus } from 'lucide-react';

export default function LinksPage() {
    return (
        <div className="space-y-10">
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter mb-2">단축 링크 관리</h2>
                    <p className="text-text-secondary font-medium">리다이렉션을 효율적으로 관리하고 보안을 강화하세요.</p>
                </div>
                <button className="primary-btn flex items-center gap-2">
                    <Plus size={20} />
                    <span>프리미엄 링크 생성</span>
                </button>
            </header>

            <div className="glass-container">
                <div className="p-8 border-b border-white/5 flex items-center justify-between gap-4">
                    <div className="relative flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="링크, 별칭 또는 태그로 검색..."
                            className="pro-input py-3 pl-12"
                        />
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary">
                            <Plus size={18} className="rotate-45" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <select className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm font-semibold outline-none focus:border-accent">
                            <option>최신순</option>
                            <option>클릭순</option>
                            <option>만료임박</option>
                        </select>
                    </div>
                </div>

                <LinkTable />
            </div>
        </div>
    );
}
