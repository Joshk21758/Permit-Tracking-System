import { logout } from "@/actions/auth";
import { authUser } from "@/lib/authUser";
import { Smile } from "lucide-react";
import Link from "next/link";

export default async function AdminHeader() {
  const user = await authUser();
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                <Smile className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Zed Permits
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/admin/dashboard/facility-metrics"
                className="text-slate-600 hover:text-green-600 font-medium transition-colors"
              >
                User feedback
              </Link>
              <Link
                href="/admin/dashboard/user-management"
                className="text-slate-600 hover:text-green-600 font-medium transition-colors"
              >
                User management
              </Link>
              {user && (
                <div>
                  <form action={logout}>
                    <button className="text-slate-600 hover:text-green-600 font-medium transition-colors">
                      Logout
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
