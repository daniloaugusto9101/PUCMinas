import React from "react";

const MENU_DATA = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-1">
        {MENU_DATA.map((obj, ind) => (
          <li key={ind}>
            <a
              href={obj.url}
              className="block px-3 py-2 transition-all hover:text-green-600"
            >
              {obj.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
