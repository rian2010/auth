import { useState } from "react";
import { Head } from "@inertiajs/react";
import UserDashboardLayout from "@/Layouts/UserDashboardLayout";
import {
  DocumentIcon,
  DocumentMagnifyingGlassIcon,
  IdentificationIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function Dashboard({ auth }) {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    reference: "",
    description: "",
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

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log(formValues);
    // Reset form values
    setFormValues({ reference: "", description: "" });
    // Close the modal
    setShowModal(false);
    setModalPosition("-full");
  };

  return (
    <UserDashboardLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          About Me
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
                  <IdentificationIcon className="h-6 w-6 text-gray-500 mr-2" />
                  <h3 className="text-lg font-semibold">About Me </h3>
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
                    <th className="py-2 text-center">Reference</th>
                    <th className="py-2 text-center">Description</th>
                    <th className="py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-200">
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="reference"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  <DocumentMagnifyingGlassIcon className="h-6 w-6 text-gray-500 mr-2 inline-block align-middle" />
                  Reference
                </label>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  value={formValues.reference}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  <DocumentIcon className="h-6 w-6 text-gray-500 mr-2 inline-block align-middle" />
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </UserDashboardLayout>
  );
}
