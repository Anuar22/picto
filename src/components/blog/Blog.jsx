import React from "react";
import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import MonoBlog from "./MonoBlog";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: img1,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 2,
      image: img2,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 3,
      image: img3,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 4,
      image: img4,
      date: "22 Oct, 2020",
      comments: 246,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
  ];

  return (
    <div className="content pt-25" id="blog">
      <div className="h-138">
        <div className="w-145 h-33 text-center mx-auto mb-17.5">
          <p className="section-title">Blog</p>
          <p className="font-normal text-lg text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="h-87.5 flex gap-6">
          {blogData.map((data, index) => (
            <MonoBlog data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
