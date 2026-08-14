import { Building2, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-neutral-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <Building2 className="w-8 h-8 text-teal-500" />
                <span className="text-2xl font-bold tracking-tight">
                  Zed Permits
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Providing seamless public and E-services to local communities.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <Phone className="w-5 h-5" />
                <span>+260 972 7127 79</span>
                <span>+260 967 8864 81</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 mt-3">
                <MapPin className="w-5 h-5" />
                <span>
                  Shantumbu Rd, kafue
                  <br />
                  Lusaka, 10101
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-teal-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/login"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Administrator Panel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feedback"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Give us Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Zed Permits. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
