import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSidebar } from "../redux/sideSlice"

const Header = ({ pagelink }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed z-20 flex w-full items-center justify-between px-4 sm:px-8 py-2 sm:py-3 min-h-[70px] sm:min-h-[70px] to-transparent shadow-lg">
      {/* Hamburger button for mobile */}
      <button
        className="flex items-center justify-center mr-2 sm:mr-4 text-indigo-500"
        onClick={() => dispatch(setSidebar(true))}
        aria-label="Open sidebar"
        style={{ fontSize: 0 }}
      >
        {/* SVG Hamburger Icon (no circle) */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Centered Title Bar */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full pointer-events-none">
        <div className="rounded-full bg-white px-6 py-2 shadow font-bold text-lg text-gray-900" style={{ minWidth: "80px", textAlign: "center" }}>
          {pagelink||"Tutorial"}
        </div>
      </div>
      {/* Optionally display pagelink for debug/demo */}
      {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">{pagelink}</div> */}
    </div>
  );
};

export default Header;
