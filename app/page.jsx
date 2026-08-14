import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  User,
  Briefcase,
  Users2,
  FileCheck2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-slate-100 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Unified Local Authority e-Government Portal
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Empowering Municipal Governance Through{" "}
              <span className="text-green-600">Digital Access</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fast, transparent, and completely paperless processing for
              residents, commercial enterprises, and non-governmental
              organizations across all councils.
            </p>
          </div>

          {/* THREE MAIN AUDIENCE CARDS */}
          <div id="audiences" className="grid md:grid-cols-3 gap-8">
            {/* 1. Citizen Services */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <User className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Citizen Services
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Personal permits, residential building plans, waste management
                  services, and civic approvals for individual residents.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-slate-500 mb-8">
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" />{" "}
                    Residential Building Permits
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Civic
                    Utility & Sanitation Requests
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Personal
                    Property Rates & Levies
                  </li>
                </ul>
              </div>
              <Link
                href="/services?type=citizen"
                className="w-full py-3 bg-slate-100 hover:bg-green-600 hover:text-white text-slate-800 text-sm font-semibold rounded-xl text-center transition flex items-center justify-center gap-2"
              >
                Access Citizen Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2. Business Services */}
            <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl-lg">
                Popular
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Business Services
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Commercial trading licenses, health clearances, fire safety
                  certifications, and multi-location council compliance.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-slate-500 mb-8">
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Fire &
                    Public Health Trading Licenses
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Liquor &
                    Commercial Facility Permits
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Outdoor
                    Billboard & Signage Approvals
                  </li>
                </ul>
              </div>
              <Link
                href="/services?type=business"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl text-center shadow-md transition flex items-center justify-center gap-2"
              >
                Access Business Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3. Civil Societies */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users2 className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Civil Societies
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  NGO registration, community event clearances, public gathering
                  permits, and non-profit operational waivers.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-slate-500 mb-8">
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Public
                    Event & Assembly Clearances
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> NGO &
                    Community Group Operating Status
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-green-500" /> Charitable
                    Land & Facility Approvals
                  </li>
                </ul>
              </div>
              <Link
                href="/services?type=civil"
                className="w-full py-3 bg-slate-100 hover:bg-green-800 hover:text-white text-slate-800 text-sm font-semibold rounded-xl text-center transition flex items-center justify-center gap-2"
              >
                Access CSO Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
