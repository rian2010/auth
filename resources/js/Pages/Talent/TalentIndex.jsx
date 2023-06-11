import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import Profile from "@/Images/wallpaper.jpg";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function Dashboard({ auth, education }) {
  return (
    <UserDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                  Profile
                </h3>
                <p className="text-sm text-gray-500 mb-4">Personal details</p>
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {auth.user.name}
                    </dd>
                  </div>
                  {/* <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      NIM
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {auth.user.nim}
                    </dd>
                  </div> */}
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -
                    </dd>
                  </div>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Phone Number
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -
                    </dd>
                  </div>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Major
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 bg-white w-full h-full lg:w-full overflow-hidden shadow-sm sm:rounded-lg">
            <div className="relative">
              <div
                className="absolute top-0 left-0 right-0 h-16 rounded-t-lg"
                style={{
                  backgroundImage: `url(${Profile})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <img
              src={Profile}
              alt="Profile Picture"
              className="h-16 w-16 rounded-full bg-gray-200 mx-auto mt-7 relative z-10"
            />
            <div className="p-4">
              <h2 className="text-center text-xl mt-2">{auth.user.name}</h2>
              <h2 className="text-center text-base text-gray-400 mt-2">
                Teknologi Rekayasa Perangkat Lunak
              </h2>
              <div className="flex justify-center">
                <button className="bg-indigo-500 w-11/12 py-1.5 hover:bg-blue-700 text-white font-bold mt-4  rounded">
                  Profile
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="py-8">
              <div className="relative overflow-x-auto rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3" colSpan="6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4 inline-flex items-center py-4">
                          <AcademicCapIcon className="h-6 w-6 text-gray-500 mr-2" />
                          Education
                        </h3>
                      </th>
                    </tr>
                    {/* <tr>
                      <th className="py-2 text-center text-base">Mark</th>
                      <th className="py-2 text-center text-base">Major</th>
                      <th className="py-2 text-center text-base">Year Start</th>
                      <th className="py-2 text-center text-base">Year End</th>
                      <th className="py-2 text-center text-base">
                        Last Education
                      </th>
                    </tr> */}
                  </thead>
                  {/* <tbody>
                    <tr className="bg-gray-200">
                      <td className="py-3 text-center text-base"></td>
                      <td className="py-3 text-center text-base"></td>
                      <td className="py-3 text-center text-base"></td>
                      <td className="py-3 text-center text-base"></td>
                      <td className="py-3 text-center text-base"></td>
                    </tr>
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
