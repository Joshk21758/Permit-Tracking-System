"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createApplication } from "@/actions/posts";

const type = ["Business", "Community event", "Land & construction"];

const initialState = {
  errors: {},
};

export default function ApplicationForm() {
  const [state, action, isPending] = useActionState(
    createApplication,
    initialState,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Application submitted");
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error("Please fix the highlighted errors and try again.");
    }
  }, [state]);

  return (
    <>
      <Toaster position="bottom-left" />

      <div className="rounded-[2rem] border border-neutral-300 bg-white shadow-2xl shadow-slate-200/70 p-8 sm:p-10">
        <div className="mb-8">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-green-700">
            Permit Application Form
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Apply Now
          </h2>
          <p className="mt-4 text-slate-600">
            Choose an application type, and share any other additional
            information below.
          </p>
        </div>

        <form action={action} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-3">
              <span className="text-sm font-medium text-slate-700">
                Full Name *
              </span>
              <input
                type="text"
                name="appName"
                placeholder="Enter your Names"
                className="w-full rounded-3xl border border-green-500 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="space-y-3">
              <span className="text-sm font-medium text-slate-700">NRC *</span>
              <input
                type="text"
                name="nationalId"
                placeholder="Your NRC ID"
                className="w-full rounded-3xl border border-green-500 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="space-y-3">
              <span className="text-sm font-medium text-slate-700">
                Address *
              </span>
              <input
                type="text"
                name="address"
                placeholder="Your Home address"
                className="w-full rounded-3xl border border-green-500 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="space-y-3">
              <span className="text-sm font-medium text-slate-700">
                Email *
              </span>
              <input
                type="email"
                name="email"
                placeholder="your-email@gmail.com"
                className="w-full rounded-3xl border border-green-500 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="space-y-3">
              <span className="text-sm font-medium text-slate-700">
                Select permit type
              </span>
              <select
                name="applicationType"
                className="w-full rounded-3xl border border-green-500 bg-slate-50 px-5 py-4 text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              >
                {type.map((typ) => (
                  <option key={typ} value={typ}>
                    {typ}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-3">
            <span className="text-sm font-medium text-slate-700">
              Additional Information
            </span>
            <textarea
              name="applicationDescription"
              rows={5}
              placeholder="Please share symptoms or anything else we should know."
              className="w-full rounded-3xl border border-green-500 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
            />
            {state?.errors?.applicationDescription && (
              <p className="text-sm mt-4 text-red-700">
                {state.errors.applicationDescription}
              </p>
            )}
          </label>

          <button
            disabled={isPending}
            className="w-full rounded-full bg-green-400 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-teal-600/20 transition hover:bg-teal-700 cursor-pointer disabled:opacity-60"
          >
            {isPending ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  );
}
