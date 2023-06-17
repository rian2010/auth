import React from "react";

export default function EducationDetails({ education }) {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-2 text-center">Mark</th>
              <th className="py-2 text-center">Major</th>
              <th className="py-2 text-center">Year Start</th>
              <th className="py-2 text-center">Year End</th>
              <th className="py-2 text-center">Last Education</th>
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
      </div>
    </div>
  );
}
