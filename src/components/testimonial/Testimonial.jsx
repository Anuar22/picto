import React from "react";

const Testimonial = () => {
  return (
    <div className="content flex justify-center">
      <div className="w-218 h-94">
        <div className="w-144.25 h-32 text-center mx-auto mb-14">
          <p className="section-title mb-6">Testimonial</p>
          <p className="text-lg font-normal text-[#87909D]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-[#2B384C]">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
          </p>
            <p className="text-lg font-medium text-[#2B384C] mb-6">Morbi ornare elit at libero suscipit porta.”</p>
          <div className="w-67 h-14.5 mx-auto">
            <p className="text-lg font-medium">Esther Howard</p>
            <p className="text-[16px] font-light">
              Managing Director, ABC company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
