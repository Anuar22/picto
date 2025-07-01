import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const Testimonial = () => {
  const testimonialData = [
    {
      message:
        "Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.",
      quote: `From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!`,
      name: "Esther Howard",
      designation: "Managing Director, ABC Company",
    },
    {
      message:
        "Their expertise in UI/UX design helped us transform our digital presence and improve user engagement.",
      quote: `The team demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.`,
      name: "Ali Haider",
      designation: "COO, XYZ Company",
    },
    {
      message:
        "Professional, reliable, and creative—everything you want in a development partner.",
      quote: `They delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.`,
      name: "Elon Max",
      designation: "Managing Director, KFC Company",
    },
  ];
  return (
    <div className="content flex justify-center pb-25.5">
      <div className="w-full h-full min-lg:w-218 h_94 cursor-grab ">
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonnial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonnial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
