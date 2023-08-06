import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="py-6 px-2 flex justify-between items-center container m-auto animate-slide-top">
      <Logo />
      <Navigation />
      <Search />
    </header>
  );
};

export default Header;
