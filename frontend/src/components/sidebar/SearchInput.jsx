import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 mt-2 p-1">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-gray-900"
      />
      <button className="btn btn-circle bg-sky-500 text-white border-none">
        <IoSearch className="w-6 h-6 outline-none" />
      </button>
    </div>
  );
};

export default SearchInput;
