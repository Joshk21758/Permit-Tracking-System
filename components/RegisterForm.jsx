"use client";

import { register } from "@/actions/auth";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, action, isPending] = useActionState(register, { errors: {} });
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
      <h2 className="text-xl font-extrabold text-slate-900 mb-2">
        Create Portal Account
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        Register to apply for trading licenses, site approvals, and permit
        tracking.
      </p>

      <form className="space-y-4" action={action}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"></label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Chileshe Mulenga"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {state?.errors?.fullName && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {state.errors.fullName}
              </p>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="email"
              name="email"
              placeholder="name@domain.com"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {state.errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="password"
              name="password"
              placeholder="Minimum 8 characters"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {state.errors.password}
              </p>
            )}
          </div>
        </div>

        {/* Confirm password */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Confirm password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {state?.errors?.confirmPassword && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {state.errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 rounded text-emerald-600 focus:ring-emerald-500"
          />
          <label htmlFor="terms" className="text-xs text-slate-500">
            I agree to the{" "}
            <Link href="#terms" className="text-emerald-600 underline">
              Terms of Service
            </Link>{" "}
            and consent to identity verification under statutory regulations.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2 mt-4 cursor-pointer"
        >
          {isPending ? "Creating Account" : "Complete registration"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Footer Navigation */}
      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          Already have an account?{" "}
          <Link
            href="/user/login"
            className="font-bold text-emerald-600 hover:underline"
          >
            Sign In Instead
          </Link>
        </p>
      </div>
    </div>
  );
}
