import { Layout } from "./components/layout";
import { Button, Card, Badge, Input } from "@repo/ui";

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6 h-full">
        {/* Left Column: Details */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* User Profile */}
          <Card className="flex items-start justify-between">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop" className="w-16 h-16 rounded-xl object-cover bg-gray-200" alt="Rajesh Kumar" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Rajesh Kumar</h3>
                <p className="text-sm text-gray-500 font-mono">ID: 8829-1992-8832 • Mumbai, IN</p>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-status-success uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    Email Verified
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-status-success uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    Phone Verified
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Credit Score</p>
              <p className="text-2xl font-bold text-primary">760</p>
              <p className="text-xs text-status-success font-medium">Excellent</p>
            </div>
          </Card>

          {/* KYC Verification */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">KYC Verification</p>

            <Card padding="sm" className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-status-success flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Identity Proof</p>
                  <p className="text-xs text-gray-500">PAN Card Verified</p>
                </div>
              </div>
              <Badge variant="success">PASSED</Badge>
            </Card>

            <Card padding="sm" className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-status-success flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Address Proof</p>
                  <p className="text-xs text-gray-500">Aadhaar Match: 100%</p>
                </div>
              </div>
              <Badge variant="success">PASSED</Badge>
            </Card>

            <Card padding="sm" className="flex items-center justify-between border border-yellow-100 bg-yellow-50/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Liveness Check</p>
                  <p className="text-xs text-gray-500">Manual review pending</p>
                </div>
              </div>
              <Badge variant="warning">REVIEW</Badge>
            </Card>
          </div>

          {/* Financial Snapshot */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Financial Snapshot</p>
            <Card>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Monthly Income</p>
                  <p className="text-xl font-bold text-gray-900">₹45,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Requested Amount</p>
                  <p className="text-xl font-bold text-gray-900">₹5,00,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Debt-to-Income (DTI)</p>
                  <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    28%
                    <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded font-bold">Healthy</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Existing EMI</p>
                  <p className="text-xl font-bold text-gray-900">₹12,600</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Employment Details</p>
                  <p className="font-bold text-gray-900">Senior Associate</p>
                  <p className="text-xs text-gray-500">TechFlow Solutions Pvt Ltd</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">3 Years</p>
                  <p className="text-xs text-gray-500">Tenure</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Document Viewer */}
        <div className="col-span-12 lg:col-span-7 flex flex-col h-full bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden relative">
          <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              National ID (PAN)
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <button className="hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
              <span className="text-xs font-mono">100%</span>
              <button className="hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
            {/* Mock Document Preview */}
            <div className="bg-white p-4 shadow-xl rounded w-full max-w-lg aspect-video flex items-center justify-center text-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none transform -rotate-12">
                <span className="text-6xl font-black uppercase">Sample ID</span>
              </div>
              <div className="w-full h-full border-2 border-dashed border-gray-200 rounded flex flex-col items-center justify-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                <p>Document Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500 w-full max-w-lg">
          <Input placeholder="Add internal remarks or flag issues..." className="bg-gray-50 border-gray-200" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            Request Info
          </Button>
          <Button className="bg-status-error hover:bg-red-600 focus:ring-red-500">
            <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
            Reject
          </Button>
          <Button variant="secondary">
            <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Approve
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
