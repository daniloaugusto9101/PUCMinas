import React from "react";

const BlogMenu = ({ url, text }) => {
  return (
    <li>
      <a href={url} className="block p-1 transition-all hover:text-green-600 ">
        {text}
      </a>
    </li>
  );
};

export default BlogMenu;
