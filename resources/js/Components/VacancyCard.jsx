import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function VacancyCard({ auth, vacancy }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure></figure>

      <div className="card-body">
        <h2 className="card-title">{auth.user.name}</h2>
        <p>-</p>
        <div className="card-actions justify-end">
          <button
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
            onClick={openModal}
          >
            See Details
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-2/3">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Vacancy Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details and application.
              </p>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Position
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Salary
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Registration Duration
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Job Offer
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -{" "}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Experience Level
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -{" "}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Placement Location
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -{" "}
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Job
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -{" "}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Requirement
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      -{" "}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
