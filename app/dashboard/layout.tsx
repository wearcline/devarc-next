import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar />
            <main className="flex-grow ml-72 p-12 relative">
                {/* Background Decorative Glows */}
                <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -z-10" />
                <div className="fixed bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full -z-10" />

                <div className="max-w-7xl mx-auto animate-fade">
                    {children}
                </div>
            </main>
        </div>
    );
}
