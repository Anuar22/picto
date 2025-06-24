import React from "react";

const MonoBlog = ({ data }) => {
  return (
    <div className="w-78 h-87.5 overflow-hidden rounded-[8px] border border-gray-100 hover:shadow-2xl shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-78 h-56.5 object-cover"
        />
        <div className="m-6">
          <p className="text-[14px] font-normal text-gray-400 ">
            {data?.date} / {data?.comments} Comments
          </p>
          <p className="text-lg font-medium text-[#333333]">{data?.title}</p>
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;
