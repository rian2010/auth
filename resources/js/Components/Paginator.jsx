// import React from "react";
// import { Link } from "@inertiajs/inertia-react";

// const Paginator = ({ education }) => {
//   return (
//     <div className="flex">
//       {education.map((link, key) => (
//         <React.Fragment key={key}>
//           {link.url === null ? (
//             <div
//               className="
//                 mb-1
//                 mr-1
//                 px-4
//                 py-3
//                 text-gray-400 text-sm
//                 leading-4
//                 border
//                 rounded
//               "
//               dangerouslySetInnerHTML={{ __html: link.label }}
//             ></div>
//           ) : (
//             <Link
//               href={link.url}
//               className="
//                 mb-1
//                 mr-1
//                 px-4
//                 py-3
//                 text-gray-900 text-sm
//                 leading-4
//                 border
//                 rounded
//                 hover:bg-white
//                 focus:text-indigo-500 focus:border-indigo-500
//               "
//               dangerouslySetInnerHTML={{ __html: link.label }}
//             ></Link>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Paginator;
