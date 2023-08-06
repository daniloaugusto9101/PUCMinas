import React from "react";
import BlogMenu from "../BlogMenu/BlogMenu";
import ArticleList from "../ArticleList/ArticleList";
import BlogMenuList from "../BlogMenuList/BlogMenuList";

const Blog = () => {
  return (
    <main className="p-2 container m-auto">
      <div className=" grid grid-cols-6 grid-rows-3 gap-3">
        <ArticleList />
        <BlogMenuList />
      </div>
    </main>
  );
};

export default Blog;
