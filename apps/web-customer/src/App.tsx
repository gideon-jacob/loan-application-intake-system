import { Layout } from "./components/layout";
import { Button, Card, Input } from "@repo/ui";
import { useState } from "react";

function App() {
  const [pan, setPan] = useState("ABCDE1234F");

  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">Identity Verification</h2>
          <p className="text-gray-500 mt-1">Please provide your official identification details to proceed.</p>
        </div>

        <Card className="space-y-6">
          <Input
            label="PAN Number"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            readOnly
            className="font-mono bg-gray-50"
            icon={
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Verified
              </span>
            }
          />

          <Input
            label="Aadhaar Number"
            placeholder="XXXX-XXXX-XXXX"
            className="tracking-widest"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            }
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Income Proof</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <p className="font-bold text-gray-900">Tap to upload file</p>
              <p className="text-xs text-gray-500 mt-1">PDF, JPG or PNG (Max 5MB)</p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center text-xs text-gray-400 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Your data is encrypted and secure.
        </div>

        <Button fullWidth className="h-12 text-lg shadow-lg shadow-primary/20 group">
          Save & Continue
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Button>
      </div>
    </Layout>
  );
}

export default App;
