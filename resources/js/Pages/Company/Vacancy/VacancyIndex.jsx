import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import CompanyDashboardLayout from "@/Layouts/CompanyDashboardLayout";
import {
  BuildingOfficeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard({ auth }) {
  const [showModal, setShowModal] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    jobdesk: "",
    job_offer: "",
    requirement: "",
    position: "",
    salary: "",
    placement_location: "",
  });

  const [modalPosition, setModalPosition] = useState("-full");

  const handleAddClick = () => {
    setShowModal(true);
    setModalPosition("mt-0");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalPosition("-full");
  };

  const submit = (e) => {
    e.preventDefault();
    post(route("vacancy.store"), { onSuccess: () => reset() });
    console.log(data); // Replace formValues with data
    // Reset form values
    setData({
      jobdesk: "",
      job_offer: "",
      requirement: "",
      position: "",
      salary: "",
      placement_location: "",
    });
    // Close the modal
    setShowModal(false);
    setModalPosition("-full");
    toast.success("Saved");
  };

  return (
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
                  <BuildingOfficeIcon className="h-6 w-6 text-gray-500 mr-2" />
                  <h3 className="text-lg font-semibold">Vacancy</h3>
                </div>
                <button
                  onClick={handleAddClick}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                >
                  Add
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 text-center">JobDesk</th>
                    <th className="py-2 text-center">Job Offer</th>
                    <th className="py-2 text-center">Requirement</th>
                    <th className="py-2 text-center">Position</th>
                    <th className="py-2 text-center">Salary</th>
                    <th className="py-2 text-center">Placement Location</th>
                    <th className="py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-200">
                    <td className="py-2 text-center"></td>
                    <td className="py-2 text-center"></td>
                    <td className="py-2 text-center"></td>
                    <td className="py-2 text-center"></td>
                    <td className="py-2 text-center"></td>
                    <td className="py-2 text-center"></td>
                    <td className="py-2 text-center">
                      <button className="mr-2">
                        <PencilIcon className="h-5 w-5 text-gray-500" />
                      </button>
                      <button>
                        <TrashIcon className="h-5 w-5 text-gray-500" />
                      </button>
                    </td>
                  </tr>

                  {/* Add more rows for additional education details */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`bg-gray-900 opacity-75 absolute inset-0 transition-opacity`}
            onClick={handleCloseModal}
          ></div>
          <div
            className={`bg-white p-8 rounded-lg z-10 w-6/12 ${modalPosition} transition-transform`}
          >
            <h3 className="text-lg font-semibold mb-4">Add Item</h3>
            <form onSubmit={submit} className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-4 md:pr-2">
                <label
                  htmlFor="jobdesk"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  JobDesk
                </label>
                <input
                  value={data.jobdesk}
                  type="text"
                  id="jobdesk"
                  name="jobdesk"
                  onChange={(e) => setData("jobdesk", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="w-full md:w-1/2 mb-4 md:pl-2">
                <label
                  htmlFor="job_offer"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Job Offer
                </label>
                <input
                  value={data.job_offer}
                  type="text"
                  id="job_offer"
                  name="job_offer"
                  onChange={(e) => setData("job_offer", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></input>
              </div>
              <div className="w-full md:w-1/2 mb-4 md:pr-2">
                <label
                  htmlFor="requirement"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Requirement
                </label>
                <input
                  value={data.requirement}
                  type="text"
                  id="requirement"
                  name="requirement"
                  onChange={(e) => setData("requirement", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></input>
              </div>
              <div className="w-full md:w-1/2 mb-4 md:pl-2">
                <label
                  htmlFor="position"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Position
                </label>
                <input
                  value={data.position}
                  type="text"
                  id="position"
                  name="position"
                  onChange={(e) => setData("position", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></input>
              </div>
              <div className="w-full md:w-1/2 mb-4 md:pr-2">
                <label
                  htmlFor="salary"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Salary
                </label>
                <input
                  value={data.salary}
                  type="text"
                  id="salary"
                  name="salary"
                  onChange={(e) => setData("salary", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></input>
              </div>
              <div className="w-full md:w-1/2 mb-4 md:pl-2">
                <label
                  htmlFor="placement_location"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Placement Location
                </label>
                <input
                  value={data.placement_location}
                  type="text"
                  id="placement_location"
                  name="placement_location"
                  onChange={(e) =>
                    setData("placement_location", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></input>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </CompanyDashboardLayout>
  );
}
