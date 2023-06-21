import { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import "react-datepicker/dist/react-datepicker.css";
import Paginator from "@/Components/Paginator";

export default function Dashboard({ auth, experience, ...props }) {
  console.log("props: ", props);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      router.visit(route("experience.create"));
    }
  }, [redirect]);

  const handleAddClick = () => {
    setRedirect(true);
  };
  return (
    <UserDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Experience
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
                  <BriefcaseIcon className="h-6 w-6 text-gray-500 mr-2" />
                  <h3 className="text-lg font-semibold">Experience Details</h3>
                </div>
                <button
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                  onClick={handleAddClick}
                >
                  Add
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2 text-center">JobDesk</th>
                      <th className="py-2 text-center">Type</th>
                      <th className="py-2 text-center">Year Start</th>
                      <th className="py-2 text-center">Year End</th>
                      <th className="py-2 text-center">Address</th>
                      <th className="py-2 text-center">Company</th>
                      <th className="py-2 text-center">Positions</th>
                      <th className="py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {experience.data.map((item) => (
                      <tr key={item.id} className="bg-gray-200">
                        <td className="py-2 text-center">{item.jobdesk}</td>
                        <td className="py-2 text-center">{item.type}</td>
                        <td className="py-2 text-center">{item.year_start}</td>
                        <td className="py-2 text-center">{item.year_end}</td>
                        <td className="py-2 text-center">{item.address}</td>
                        <td className="py-2 text-center">{item.company}</td>
                        <td className="py-2 text-center">{item.position}</td>
                        <td className="py-2 text-center">
                          <button
                            className="mr-2"
                            onClick={() => handleEditClick(item.id)}
                          >
                            <PencilSquareIcon className="h-5 w-5 text-gray-500" />
                          </button>
                          <button onClick={() => handleDeleteClick(item.id)}>
                            <TrashIcon className="h-5 w-5 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-4">
                <Paginator links={experience.links} />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </UserDashboardLayout>
  );
}
