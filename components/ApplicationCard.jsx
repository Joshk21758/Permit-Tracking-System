import Link from "next/link";

export default function ApplicationCard({ application }) {
  if (!application) {
    return null;
  }

  const formatValue = (value, fallback = "Not provided") => {
    if (value === undefined || value === null || value === "") {
      return fallback;
    }
    return value;
  };

  return (
    <div className="w-full max-w-4xl rounded-[2rem] border border-green-200 bg-white p-8 shadow-xl shadow-slate-200/80 sm:p-10">
      <div className="flex flex-col gap-4 border-b border-green-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-800">
            Application request
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {formatValue(application.fullName, "Applicant")}
          </h1>
          <p className="mt-2 text-slate-600">
            Review the permit details below.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-green-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800">
            Contact details
          </p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <span className="block text-sm font-medium text-slate-500">
                Email
              </span>
              <span className="mt-1 block">
                {formatValue(application.email, "Not provided")}
              </span>
            </li>
            <li>
              <span className="block text-sm font-medium text-slate-500">
                Phone number
              </span>
              <span className="mt-1 block">
                {formatValue(appointment.phoneNumber, "Not provided")}
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-green-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800">
            Appointment info
          </p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <span className="block text-sm font-medium text-slate-500">
                Service
              </span>
              <span className="mt-1 block">
                {formatValue(application.applicationType, "Not specified")}
              </span>
            </li>
            <li>
              <span className="block text-sm font-medium text-slate-500">
                Address
              </span>
              <span className="mt-1 block">
                {formatValue(application.address, "Not specified")}
              </span>
            </li>
            <li>
              <span className="block text-sm font-medium text-slate-500">
                National Registration Card
              </span>
              <span className="mt-1 block">
                {formatValue(application.nationalId, "Not specified")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Additional notes
        </p>
        <p className="mt-3 whitespace-pre-line text-slate-700">
          {formatValue(
            application.applicationDescription,
            "No additional notes were provided.",
          )}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/user/dashboard"
          className="rounded-full bg-teal-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Back to applications
        </Link>
      </div>
    </div>
  );
}
