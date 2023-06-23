import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"; // Import the Link component
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard({ auth }) {
  const education = usePage().props.auth.user;

  const { data, setData, post, processing, reset, errors } = useForm({
    mark: education.mark,
    major: education.major,
    year_start: education.year_start,
    year_end: education.year_end,
    last_education: education.last_education,
  });

  const submit = (e) => {
    e.preventDefault();
    patch(route("education.update"), { onSuccess: () => reset() });
  };

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

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form className="rounded-lg" onSubmit={submit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Add Education
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mark
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.mark}
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          onChange={(e) => setData("mark", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Major
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.major}
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          onChange={(e) => setData("major", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="year-start"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Year Start
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.year_start}
                          type="date"
                          name="year-start"
                          id="year-start"
                          onChange={(e) =>
                            setData("year_start", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="year-end"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Year End
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.year_end}
                          type="date"
                          name="year-end"
                          id="year-end"
                          onChange={(e) => setData("year_end", e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="year-start"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last Education
                      </label>
                      <div className="mt-2">
                        <input
                          value={data.last_education}
                          type="text"
                          name="year-start"
                          id="year-start"
                          onChange={(e) =>
                            setData("last_education", e.target.value)
                          }
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link
                  href={route("education.index")}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  disabled={processing}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
