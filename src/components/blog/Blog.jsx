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
  const blogData = [
    {
      id: 1,
      image: img1,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      link: "#",
    },
    {
      id: 2,
      image: img2,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      link: "#",
    },
    {
      id: 3,
      image: img3,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      link: "#",
    },
    {
      id: 4,
      image: img4,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      link: "#",
    },
    {
      id: 5,
      image: img2,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      link: "#",
    },
    {
      id: 6,
      image: img1,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      link: "#",
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
          slidesPerView={4}
          centeredSlides={false}
          grabCursor={true}
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
