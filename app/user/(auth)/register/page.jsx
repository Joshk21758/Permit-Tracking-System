import Link from "next/link";
import { Building2 } from "lucide-react";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col justify-center py-12 px-6">
      <div className="max-w-lg w-full mx-auto">
        {/* Header Branding */}
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
            Register for Digital Government Services
          </p>
        </div>

        {/* Register form */}
        <RegisterForm />
      </div>
    </div>
  );
}
