import React from "react";

const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="min-sm:w_144.25 h_32 text-center mx-auto min-sm:mb-17.5 min-sm:px-36.5">
        <p className="section-title mb-6">Testimonial</p>
        <p className="text-[14px] min-sm:text-[18px] text-[#87909D]">
          {testimonial?.message}
        </p>
      </div>
      <div className="text-center">
        <p className="text-[14px] min-sm:text-lg font-medium text-[#2B384C] mb-6">
          “{testimonial?.quote}”
        </p>
        <div className="w_67 h_14.5 mx-auto">
          <p className="text-lg font-medium mb-2">{testimonial?.name}</p>
          <p className="text-[16px] font-light">{testimonial?.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
