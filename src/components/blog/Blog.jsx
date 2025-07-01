import React from "react";
import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

const Blog = () => {
  // Breakpoints for swiperJS
  const custom_breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1220: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  const blogData = [
    {
      id: 1,
      image: img1,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Designing Engaging User Interfaces for Modern Web Apps",
      link: "#!",
    },
    {
      id: 2,
      image: img2,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Tips for Effective Dashboard Layouts and Usability",
      link: "#!",
    },
    {
      id: 3,
      image: img3,
      date: "22 Oct, 2020",
      comments: 246,
      title: "How to Visualize Data for Better Product Decisions",
      link: "#!",
    },
    {
      id: 4,
      image: img4,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Responsive Design: Adapting to All Devices Seamlessly",
      link: "#!",
    },
    {
      id: 5,
      image: img2,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Streamlining Workflows with UI/UX Best Practices",
      link: "#!",
    },
    {
      id: 6,
      image: img1,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Optimizing Interface Components for Performance",
      link: "#!",
    },
  ];

  return (
    <div className="content h-full" id="blog">
      <div className="pt-25 h-138">
        <div className="min-sm:w-145 min-sm:h-33 text-center mx-auto mb-17.5">
          <p className="section-title">Blog</p>
          <p className="font-normal text-2xs min-sm:text-lg text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          grabCursor={true}
          breakpoints={custom_breakpoints}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          <div className="h-87.5 gap-6">
            {blogData.map((data, index) => (
              <SwiperSlide key={index}>
                <MonoBlog data={data} key={index} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
