import { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  StarIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { redirect } from "react-router-dom";

export default function Dashboard({ auth, props, education }) {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (redirect) {
      router.visit(route("education.create"));
    }
  }, [redirect]);

  const handleAddClick = () => {
    setRedirect(true);
  };
  return (
    console.log(props),
    (
      <UserDashboardLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-white leading-tight">
            Education
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
                    <h3 className="text-lg font-semibold">Education Details</h3>
                  </div>
                  <button
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                    onClick={handleAddClick}
                    href={route("education.create")}
                  >
                    Add
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2 text-center">Mark</th>
                      <th className="py-2 text-center">Major</th>
                      <th className="py-2 text-center">Year Start</th>
                      <th className="py-2 text-center">Year End</th>
                      <th className="py-2 text-center">Last Education</th>
                      <th className="py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((item) => (
                      <tr key={item.id} className="bg-gray-200">
                        <td className="py-2 text-center">{item.mark}</td>
                        <td className="py-2 text-center">{item.major}</td>
                        <td className="py-2 text-center">{item.year_start}</td>
                        <td className="py-2 text-center">{item.year_end}</td>
                        <td className="py-2 text-center">
                          {item.last_education}
                        </td>
                        <td className="py-2 text-center">
                          <button className="mr-2">
                            <PencilIcon className="h-5 w-5 text-gray-500" />
                          </button>
                          <button>
                            <TrashIcon className="h-5 w-5 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>{" "}
                </table>
              </div>
            </div>
          </div>
        </div>
      </UserDashboardLayout>
    )
  );
}
