import { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import {
  PencilSquareIcon,
  TrashIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard({ auth, props, achivement }) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      router.visit(route("achivement.create"));
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
            Achievement
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
                    <TrophyIcon className="h-6 w-6 text-gray-500 mr-2" />
                    <h3 className="text-lg font-semibold">
                      Achievement Details
                    </h3>
                  </div>
                  <button
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                    onClick={handleAddClick}
                    href={route("achivement.create")}
                  >
                    Add
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2 text-center">Position</th>
                      <th className="py-2 text-center">Achivement Date</th>
                      <th className="py-2 text-center">Description</th>
                      <th className="py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {achivement.map((item) => (
                      <tr key={item.id} className="bg-gray-200">
                        <td className="py-2 text-center">{item.position}</td>
                        <td className="py-2 text-center">
                          {item.achivement_date}
                        </td>
                        <td className="py-2 text-center">{item.description}</td>
                        <td className="py-2 text-center">
                          <button className="mr-2">
                            <PencilSquareIcon className="h-5 w-5 text-gray-500" />
                          </button>
                          <button>
                            <TrashIcon className="h-5 w-5 text-gray-500" />
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
      </UserDashboardLayout>
    )
  );
}
