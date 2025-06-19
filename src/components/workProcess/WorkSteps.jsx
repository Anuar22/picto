import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WorkSteps = ({ data, style }) => {
  /* w-52 h-46 */
  return (
    <div
      className={`w-52 h-46 min-xs:w-65 min-xs:h-57.5 min-sm:w-78 min-sm:h-69 p-4 min-sm:p-8 bg-white rounded-xl ${
        style && style
      }`}
    >
      <div
        className={`w-11 h-11 min-sm:w-18 min-sm:h-18 ${data?.background} text-center center rounded-md`}
      >
        <p className="">
          <FontAwesomeIcon
            icon={data?.icon}
            className="text-xl min-sm:text-3xl"
            style={{
              color: data?.background == "bg-[#A53DFF]" ? "#ffffff" : "#A53DFF",
            }}
          />
        </p>
      </div>
      <div className="mt-3 min-xs:mt-8 min-sm:mt-8">
        <p className="font-semibold min-sm:text-xl">{`${data?.id} ${data?.title}`}</p>
        <p className="mt-3 text-[13px] min-sm:text-[16px]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};
//   return (
//     <div
//       className={`w-78 h-69 p-8 bg-white rounded-xl relative ${style && style}`}
//     >
//       <div
//         className={`w-18 h-18 ${data?.background} text-center center rounded-md relative`}
//       >
//         <p className="">
//           <FontAwesomeIcon
//             icon={data?.icon}
//             size="2xl"
//             style={{
//               color: data?.background == "bg-[#A53DFF]" ? "#ffffff" : "#A53DFF",
//             }}
//           />
//         </p>
//       </div>
//       <div className="mt-8 relative">
//         <p className="font-semibold text-xl relative">{`${data?.id} ${data?.title}`}</p>
//         <p className="mt-3 text-[16px] relative">{data?.description}</p>
//       </div>
//     </div>
//   );
// };

export default WorkSteps;
