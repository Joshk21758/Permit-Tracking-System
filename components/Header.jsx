import { logout } from "@/actions/auth";
import { authUser } from "@/lib/authUser";
import { Building2 } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  const user = await authUser();
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

          <div className="flex items-center gap-4">
            {user ?
              <div>
                <form action={logout}>
                  <button className="px-4 py-2 text-lg font-semibold text-white  transition cursor-pointer border rounded-2xl bg-neutral-700 hover:bg-red-400 w-full h-12 shadow-md">
                    Logout
                  </button>
                </form>
              </div>
            : <>
                <Link
                  href="/user/login"
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-green-900 transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/user/register"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-gray-700 hover:bg-green-700 rounded-xl shadow-md shadow-emerald-600/20 transition"
                >
                  Get Started
                </Link>
              </>
            }
          </div>
        </div>
      </header>
    </div>
  );
}
