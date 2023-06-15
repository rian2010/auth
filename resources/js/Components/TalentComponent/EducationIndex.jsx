import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const EducationIndex = ({ education }) => {
  return (
    <div className="md:col-span-3">
      <div className="py-8">
        <div className="relative overflow-x-auto rounded-lg">
          {education ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3" colSpan="6">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4 inline-flex items-center py-4">
                      <AcademicCapIcon className="h-6 w-6 text-gray-500 mr-2" />
                      Education
                    </h3>
                  </th>
                </tr>
                <tr>
                  <th className="py-2 text-center text-base">Mark</th>
                  <th className="py-2 text-center text-base">Major</th>
                  <th className="py-2 text-center text-base">Year Start</th>
                  <th className="py-2 text-center text-base">Year End</th>
                  <th className="py-2 text-center text-base">Last Education</th>
                </tr>
              </thead>
              <tbody>
                {education.map((item) => (
                  <tr key={item.id} className="bg-gray-200">
                    <td className="py-2 text-center">{item.mark}</td>
                    <td className="py-2 text-center">{item.major}</td>
                    <td className="py-2 text-center">{item.year_start}</td>
                    <td className="py-2 text-center">{item.year_end}</td>
                    <td className="py-2 text-center">{item.last_education}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading education data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationIndex;
