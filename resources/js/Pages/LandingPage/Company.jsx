import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { usePage } from "@inertiajs/react";

function Company() {
  const { company } = usePage().props;

  return (
    <LandingPageLayout>
      <div className="p-16">
        <div className="flex flex-wrap justify-center -mx-4">
          {company.map((item) => (
            <div
              key={item.id}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4"
            >
              <img
                className="w-full bg-cover"
                src="https://cdn-cms.pgimgs.com/static/2021/07/1.-HIGH-RISE-BUILDING.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-sm mb-2 ">{item.name}</div>
                <div className="flex justify-end">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-full">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LandingPageLayout>
  );
}

export default Company;
