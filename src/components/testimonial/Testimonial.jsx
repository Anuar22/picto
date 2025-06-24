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
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum eos distinctio ad eligendi asperiores doloribus expedita! Officia blanditiis unde numquam quam vitae, quaerat ab? Deleniti nihil molestias illum sequi inventore quidem quo, eligendi nam adipisci ratione quibusdam sit odio earum! Ea eius officia mollitia, possimus ex laborum ipsa soluta.`,
      name: "Esther Howard",
      designation: "Managing Director, ABC company",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, unde?",
      quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde alias magnam delectus laudantium voluptatem iure nemo error, esse a atque rerum suscipit facere cumque minima officiis praesentium dicta nulla reprehenderit dolorum soluta vitae ut tenetur autem? Ab pariatur nobis numquam sequi. Pariatur illum vel eum quasi minus dolores quam?`,
      name: "Ali Haider",
      designation: "COO, XYZ company",
    },
    {
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, debitis!",
      quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae consectetur odit molestias blanditiis ipsum quos numquam beatae unde voluptas perferendis cupiditate recusandae, cumque accusamus vel veniam corrupti. Fugiat libero perspiciatis incidunt quae et? Temporibus molestiae, dolorum ad, tempore velit dolores numquam dolorem, voluptate tenetur similique labore aliquid? Eaque, repellendus?`,
      name: "Elon Max",
      designation: "Managing Director, KFC company",
    },
  ];
  return (
    <div className="content flex justify-center">
      <div className="w-full h-full min-lg:w-218 h_94">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
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
