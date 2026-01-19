import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-surface-background font-sans text-gray-900">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {/* Placeholder logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                    </div>
                    <div>
                        <p className="text-xs text-secondary font-medium tracking-wide uppercase">In Association With</p>
                        <h1 className="text-lg font-bold text-gray-900 leading-tight">Naandi Foundation</h1>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </header>

            {/* Stepper (Simplified) */}
            <div className="bg-white px-6 py-4 mb-4 shadow-sm">
                <div className="max-w-md mx-auto flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>

                    <div className="flex flex-col items-center gap-1 bg-white px-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-xs font-medium text-primary">Personal</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 bg-white px-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg ring-4 ring-primary/20">2</div>
                        <span className="text-xs font-bold text-primary">KYC</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 bg-white px-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-sm font-bold">3</div>
                        <span className="text-xs font-medium text-gray-400">Financials</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 bg-white px-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-sm font-bold">4</div>
                        <span className="text-xs font-medium text-gray-400">Review</span>
                    </div>
                </div>
            </div>

            <main className="p-4 md:p-6 max-w-lg mx-auto pb-24">
                {children}
            </main>

            {/* Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden">
                {/* Mobile only footer, usually buttons go here */}
            </div>
        </div>
    );
};
