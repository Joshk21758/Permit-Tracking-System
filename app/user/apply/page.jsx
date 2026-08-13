import { getCollection } from "@/lib/db";

export default async function ApplicationsPage() {
  const applicationCollection = await getCollection("applications");
  const applications = await applicationCollection.find().toArray();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-lg text-neutral-700 mb-6">
            View and manage Administrators.
          </p>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Full Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.length > 0 ?
                  applications.map((app) => (
                    <tr
                      key={app._id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          {app.fullName}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          {user.role}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900">
                          {app.email}
                        </p>
                      </td>
                    </tr>
                  ))
                : <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-neutral-800"
                    >
                      <p className="text-xl">No Application yet. </p>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
