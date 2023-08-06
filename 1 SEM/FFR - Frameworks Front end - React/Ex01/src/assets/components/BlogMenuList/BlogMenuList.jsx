import React from "react";
import BlogMenu from "../BlogMenu/BlogMenu";

const BLOG_MENU = [
  {
    title: "Section 1",
    url: "/section-1",
  },
  {
    text: "Section 2",
    url: "/section-2",
  },
  {
    text: "Section 3",
    url: "/section-3",
  },
  {
    text: "Section 4",
    url: "/section-4",
  },
  {
    text: "Section 5",
    url: "/section-5",
  },
  {
    text: "Section 6",
    url: "/section-6",
  },
];

const BlogMenuList = () => {
  return (
    <section className="col-start-6 col-span-full row-span-full text-center bg-gray-100 shadow-md animate-slide-top">
      <ul>
        {BLOG_MENU.map((obj, ind) => (
          <BlogMenu key={ind} url={obj.url} text={obj.text} />
        ))}
      </ul>
    </section>
  );
};

export default BlogMenuList;
