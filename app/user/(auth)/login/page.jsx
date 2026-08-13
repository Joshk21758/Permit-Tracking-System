import Link from "next/link";
import { Building2, ShieldCheck } from "lucide-react";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col justify-center py-12 px-6">
      <div className="max-w-md w-full mx-auto">
        {/* Portal Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-3">
            <div className="bg-emerald-600 p-2.5 rounded-xl text-white shadow-md shadow-emerald-600/20">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">
              e-Council Portal
            </span>
          </Link>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Local Authority Portal Access
          </p>
        </div>

        {/* Login form */}
        <LoginForm />

        {/* Security Compliance Badge */}
        <div className="mt-6 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" /> Encrypted &
          Compliant with Data Protection Standards
        </div>
      </div>
    </div>
  );
}
