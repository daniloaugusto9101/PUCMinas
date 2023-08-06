import React from "react";

const Article = ({ img, description }) => {
  return (
    <article className="bg-gray-100 flex items-center col-start-1 col-span-5 shadow-md p-2 animate-slide-top">
      <img src={img} className="object-contain" />
      <p className="ml-2">{description}</p>
    </article>
  );
};

export default Article;
