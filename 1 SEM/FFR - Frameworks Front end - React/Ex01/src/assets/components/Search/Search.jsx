import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form action="" className="border border-gray-300 flex items-center p-2">
      <input
        type="text"
        placeholder="Buscar..."
        className="rounded outline-none "
      />
      <FaSearch className="cursor-pointer text-gray-300" />
    </form>
  );
};

export default Search;
