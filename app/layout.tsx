import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Arcline Admin Hub | Mega Next.js",
    description: "Next-generation administration portal with real-time analytics",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <div className="min-h-screen bg-background text-white selection:bg-accent selection:text-white">
                    {children}
                </div>
            </body>
        </html>
    );
}
