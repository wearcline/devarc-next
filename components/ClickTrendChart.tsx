"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// ApexCharts needs window, so we import it dynamically
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ClickTrendChart() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const chartOptions: any = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: { show: false },
            background: 'transparent',
            foreColor: '#9499ad',
            fontFamily: 'Inter, sans-serif'
        },
        colors: ['#0076ff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100]
            }
        },
        stroke: { curve: 'smooth', width: 3 },
        xaxis: {
            categories: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07'],
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        grid: {
            borderColor: 'rgba(255,255,255,0.05)',
            strokeDashArray: 4
        },
        dataLabels: { enabled: false },
        tooltip: { theme: 'dark' }
    };

    const chartSeries = [
        {
            name: 'Clicks',
            data: [31, 40, 28, 51, 42, 109, 100]
        }
    ];

    return (
        <div className="glass-container p-8 h-full">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold tracking-tight">최근 7일 클릭 트렌드</h3>
                    <p className="text-text-secondary text-sm">트래픽 유입 경로 및 트렌드 분석</p>
                </div>
                <span className="bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Real-time
                </span>
            </div>

            <div className="min-h-[350px] flex items-center justify-center">
                {isLoaded ? (
                    <Chart options={chartOptions} series={chartSeries} type="area" height={350} width="100%" />
                ) : (
                    <div className="animate-pulse w-full h-[300px] bg-white/5 rounded-2xl" />
                )}
            </div>
        </div>
    );
}
