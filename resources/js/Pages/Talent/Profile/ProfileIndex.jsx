import { Head, Link } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import Icon from "@/Images/icon.png";
import Kampus from "@/Images/Kampus.jpg";
import { useState } from "react";
import UpdateProfileTalent from "./Partials/UpdateProfileTalent";
import DeleteUserForm from "./Partials/DeleteUserForm";

export default function Dashboard({ auth, education, mustVerifyEmail }) {
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

      <div>
        <UpdateProfileTalent
          mustVerifyEmail={mustVerifyEmail}
          status={status}
        />
      </div>

      <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
        <div className="max-w-xl">
          <DeleteUserForm />
        </div>
      </div>

      {/* <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="mx-auto max-w-2xl">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div className="p-7">
                    <form action="#">
                      <div className="space-y-12">
                        <div className="border-b pb-12">
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="position"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="position"
                                  id="position"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="salary"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Salary
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="salary"
                                  id="salary"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="registration-duration"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Registration Duration
                              </label>
                              <div className="mt-2">
                                <input
                                  type="date"
                                  name="registration-duration"
                                  id="registration-duration"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="job-offer"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Job Offer
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="job-offer"
                                  id="job-offer"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="experience-level"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Experience Level
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="experience-level"
                                  id="experience-level"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="placement-location"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Placement Location
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="placement-location"
                                  id="placement-location"
                                  autoComplete="street-address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link
                          href={route("vacancy.index")}
                          type="button"
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </Link>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 bg-white w-full h-64 lg:w-full overflow-hidden shadow-sm sm:rounded-lg">
              <div className="relative">
                <div
                  className="absolute top-0 left-0 right-0 h-16 rounded-t-lg"
                  style={{
                    backgroundImage: `url(${Kampus})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="profileImageInput"
              />
              <label htmlFor="profileImageInput" className="cursor-pointer">
                <img
                  src={Icon}
                  alt="Profile Picture"
                  className="h-16 w-16 rounded-full bg-gray-200 mx-auto mt-7 relative z-10"
                />
              </label>
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
          </div>
        </div>
      </div> */}
    </UserDashboardLayout>
  );
}
