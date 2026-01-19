import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-surface-background flex font-sans text-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 hidden lg:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-100">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                    </div>
                    <div>
                        <h1 className="font-bold text-secondary tracking-tight">FINTRUST</h1>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Officer Portal</p>
                    </div>
                </div>

                <nav className="p-4 space-y-1 flex-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        <span className="font-medium">Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-secondary/5 text-secondary rounded-xl transition-colors border-l-4 border-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        <span className="font-medium">Queue</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span className="font-medium">Approved</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                        <span className="font-medium">Audit Logs</span>
                    </a>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <div className="w-10 h-10 rounded-full bg-accent/20 text-accent-dark flex items-center justify-center font-bold">AM</div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Alex Morgan</p>
                            <p className="text-xs text-gray-500">Senior Officer</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-3">
                            Application #LK-9928
                            <span className="px-2.5 py-0.5 rounded-md bg-accent/20 text-yellow-700 text-xs font-bold uppercase tracking-wide">In Review</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Assigned: 12 mins ago</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
