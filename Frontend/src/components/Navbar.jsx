import React from "react";
import { FaFilePdf } from "react-icons/fa"; // Importing an icon from react-icons

function Navbar() {
  return (
    <div className="navbar  fixed top-0 w-full Z-60 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <FaFilePdf className="text-3xl mr-3" aria-label="PDF Icon" />
          <button className="btn btn-ghost text-2xl font-semibold">
            Words To PDF Converter
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
