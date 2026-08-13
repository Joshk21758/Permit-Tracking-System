import { Building2, Smile } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2.5 rounded-xl text-white shadow-md shadow-emerald-600/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-900 tracking-tight block leading-none">
                ZedPermits
              </span>
              <span className="text-xs text-emerald-600 font-medium">
                Smart Governance Division
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#audiences" className="hover:text-emerald-600 transition">
              Services
            </a>
            <a href="user/login" className="hover:text-emerald-600 transition">
              Track Application
            </a>
            <a href="user/login" className="hover:text-emerald-600 transition">
              Verify Permit
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/user/login"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition"
            >
              Sign In
            </Link>
            <Link
              href="/user/register"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md shadow-emerald-600/20 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
