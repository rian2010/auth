import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination({ links }) {
  function getClassName(active) {
    if (active) {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:text-indigo-500 focus:border-indigo-500 bg-indigo-300";
    } else {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:text-indigo-500 focus:border-indigo-500";
    }
  }

  return (
    <div className="flex">
      {links.map((link, key) => (
        <React.Fragment key={key}>
          {link.url === null ? (
            <div
              className="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded"
              dangerouslySetInnerHTML={{ __html: link.label }}
            ></div>
          ) : (
            <Link
              href={link.url}
              className={`${getClassName(link.active)} ${
                link.active ? "bg-indigo-300" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            ></Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
