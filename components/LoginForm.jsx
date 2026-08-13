"use client";

import { login } from "@/actions/auth";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function LoginForm() {
  const [state, action, isPending] = useActionState(login, { errors: {} });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
      {/* Account Type Toggle (Citizen vs Council Officer) */}
      <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-6"></div>

      <form className="space-y-4">
        {/* Identity/Email Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {state.errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Password Input */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Password
            </label>
            <Link
              href="#forgot"
              className="text-xs font-semibold text-emerald-600 hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {state.errors.password}
              </p>
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
            >
              {showPassword ?
                <EyeOff className="w-4 h-4" />
              : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 font-semibold rounded-xl text-sm text-white shadow-md transition flex items-center justify-center gap-2 mt-2
          "
        >
          Sign In
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Footer Navigation */}
      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          Do not have an account yet?{" "}
          <Link
            href="/user/register"
            className="font-bold text-emerald-600 hover:underline"
          >
            Register Citizen Profile
          </Link>
        </p>
      </div>
    </div>
  );
}
