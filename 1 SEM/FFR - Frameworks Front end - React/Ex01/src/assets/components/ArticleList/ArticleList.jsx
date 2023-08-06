import React from "react";
import Article from "../Article/Article";

const ARTICLES = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti ex illum dignissimos consequuntur saepe beatae atque accusamus praesentium, quo at expedita perspiciatis, doloribus quamanimi dolorum quibusdam consectetur cupiditate? Lorem ipsum dolorsit amet consectetur adipisicing elit. Voluptates magnam illo, perferendis dignissimos consequatur officia totam? Culpa vitae officiis eius animi beatae placeat veniam magni. Nemo eum assumendamodi consequatur",
    img: "http://placehold.it/150x150",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti ex illum dignissimos consequuntur saepe beatae atque accusamus praesentium, quo at expedita perspiciatis, doloribus quamanimi dolorum quibusdam consectetur cupiditate? Lorem ipsum dolorsit amet consectetur adipisicing elit. Voluptates magnam illo, perferendis dignissimos consequatur officia totam? Culpa vitae officiis eius animi beatae placeat veniam magni. Nemo eum assumendamodi consequatur",
    img: "http://placehold.it/150x150",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti ex illum dignissimos consequuntur saepe beatae atque accusamus praesentium, quo at expedita perspiciatis, doloribus quamanimi dolorum quibusdam consectetur cupiditate? Lorem ipsum dolorsit amet consectetur adipisicing elit. Voluptates magnam illo, perferendis dignissimos consequatur officia totam? Culpa vitae officiis eius animi beatae placeat veniam magni. Nemo eum assumendamodi consequatur",
    img: "http://placehold.it/150x150",
  },
];

const ArticleList = () => {
  return ARTICLES.map((obj, ind) => (
    <Article key={ind} img={obj.img} description={obj.description} />
  ));
};

export default ArticleList;
