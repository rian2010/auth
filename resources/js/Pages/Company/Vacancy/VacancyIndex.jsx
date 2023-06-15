import { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
  AcademicCapIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";
import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard({ auth, vacancy, ...props }) {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (redirect) {
      router.visit(route("vacancy.create"));
    }
  }, [redirect]);

  const handleAddClick = () => {
    setRedirect(true);
  };
  return (
    console.log(props),
    (
      <CompanyDashboardLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-white leading-tight">
            Vacancy
          </h2>
        }
      >
        <Head title="Dashboard" />
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <AcademicCapIcon className="h-6 w-6 text-gray-500 mr-2" />
                    <h3 className="text-lg font-semibold">Vacancy Details</h3>
                  </div>
                  <button
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                    onClick={handleAddClick}
                    href={route("vacancy.create")}
                  >
                    Add
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2 text-center">Position</th>
                      <th className="py-2 text-center">Salary</th>
                      <th className="py-2 text-center">
                        Registration Duration
                      </th>

                      <th className="py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacancy.map((item) => (
                      <tr key={item.id} className="bg-gray-200">
                        <td className="py-2 text-center">{item.position}</td>
                        <td className="py-2 text-center">{item.salary}</td>
                        <td className="py-2 text-center">
                          {item.registration_duration}
                        </td>

                        <td className="py-2 text-center">
                          <button className="mr-2">
                            <div className="h-5 w-5 text-gray-500">Details</div>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </CompanyDashboardLayout>
    )
  );
}
