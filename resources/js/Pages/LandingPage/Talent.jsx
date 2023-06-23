import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import { Link, usePage } from "@inertiajs/react";
import Paginator from "@/Components/Paginator";

export default function Talent() {
  const { talent } = usePage().props;

  return (
    <LandingPageLayout>
      <div className="p-16">
        <div className="flex flex-wrap justify-center -mx-4">
          {talent.data.map((item) => (
            <div
              key={item.id}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4"
            >
              <img
                className="w-full bg-cover"
                src="https://placeimg.com/640/480/any"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-sm mb-2 ">{item.name}</div>
                <div className="flex justify-end">
                  <Link href={route("talent.details", { talentId: item.id })}>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-full">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Paginator links={talent.links} />
        </div>
      </div>
    </LandingPageLayout>
  );
}
