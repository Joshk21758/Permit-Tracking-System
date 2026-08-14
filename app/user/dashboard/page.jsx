import { deleteApplication } from "@/actions/posts";
import { getCollection } from "@/lib/db";
import Link from "next/link";

export default async function UserDashboardPage() {
  const applicationCollection = await getCollection("applications");
  const applications = await applicationCollection.find().toArray();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Track and manage your submitted applications.
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
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Address
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Phone Number
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    NRC
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Permit Type
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Description
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Actions
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
                          {app.appName}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {app.email}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {app.address}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {app.phone}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {app.nationalId}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {app.applicationType}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {app.applicationDescription}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center gap-3">
                          <Link
                            href={`/user/apply/edit/${app._id.toString()}`}
                            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-neutral-600 hover:bg-green-800 shadow-sm hover:shadow-md transition-all duration-200"
                          >
                            Edit
                          </Link>
                          <form action={deleteApplication}>
                            <input
                              type="hidden"
                              name="postId"
                              value={app._id.toString()}
                            />
                            <button className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                : <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      <p className="text-xl text-center font-bold">
                        No Application available.{" "}
                        <Link
                          href="/user/apply/new"
                          className="text-neutral-700 hover:text-green-700 font-medium cursor-pointer"
                        >
                          Create new Application
                        </Link>
                      </p>
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
