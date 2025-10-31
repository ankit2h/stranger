import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "@fontsource/bebas-neue";
import { ChevronDown, X, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSidebar } from "../redux/sideSlice";

const Sidebar = ({ onClose }) => {
  const open = useSelector((store) => store.sidebar.sidebar);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dispatch = useDispatch();

  // Listen for custom closeSidebar event to close sidebar from overlay or button
  useEffect(() => {
    const handleClose = () => dispatch(setSidebar(false));
    window.addEventListener("closeSidebar", handleClose);
    return () => window.removeEventListener("closeSidebar", handleClose);
  }, [dispatch]);

  // Fetch all links from backend API
  const [links, setLinks] = useState([]);
  const [fronts, setFronts] = useState([]);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const menuItems = [{ name: "The Melodic Illusion" },{ name: "The Corpse Behind the Curtain" },{ name: "The Game of Deception" },{ name: "The Symphony of Lies" },{ name: "The Final Note" }, { name: "Cast" }];

  return (
    <aside className="fixed w-56 lg:w-96 h-screen bg-gradient-to-b from-[#18181b] to-[#111113] text-white shadow-2xl flex flex-col border-r border-gray-800 mt-2 z-[9999] overflow-y-auto hide-scrollbar">
      {/* Cross Button */}
      <button
        className="relative top-10 left-4 text-gray-400 hover:text-indigo-50 transition-colors z-10"
        onClick={() => dispatch(setSidebar(false))}
        aria-label="Close sidebar"
      >
        <X size={22} />
      </button>
      {/* Header */}
      <div className="flex items-center gap-2 mb-8 mt-4 px-20">
        <span
          className="text-3xl font-extrabold text-indigo-50 tracking-widest drop-shadow-lg select-none mx-auto"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            color: "#fff",
            fontWeight: 900,
            fontSize: "1.5rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          ANDHADHUN
        </span>
      </div>

      {/* Menu */}
      <ul className="space-y-2 px-2 flex-1 justify-center items-center">
        <div className="flex justify-center w-full">
          <Link
            to={`/`}
            onClick={() => dispatch(setSidebar(false))}
            className="px-4 py-2 mb-7 w-40 rounded-lg bg-gradient-to-r from-[#232326] to-[#18181b] cursor-pointer transition-all duration-200 border border-transparent hover:border-indigo-500 shadow-sm"
            style={{
              boxShadow: "0 0 8px #e50914, 0 0 16px #e50914, 0 0 24px #e50914", // indigo-500
              textShadow: "0 0 8px #e50914, 0 0 16px #e50914, 0 0 24px #e50914", // indigo-500
              fontFamily: "Bebas Neue, sans-serif",
              color: "#fff",
              fontWeight: 900,
              fontSize: "1.5rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Overview
          </Link>
        </div>
        <div></div>
        {menuItems.map((item) => (
          <li key={item.name}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex justify-between items-center w-full px-5 py-2 rounded-lg 
                    transition-all duration-200 shadow-sm border border-transparent hover:border-indigo-500`}
                >
                  <span className="text-gray-200 font-medium">{item.name}</span>
                  <ChevronRight
                    size={22}
                    className={`ml-2 transform transition-transform duration-300 ${
                      openDropdown === item.name
                        ? "rotate-90 text-indigo-500"
                        : "rotate-0"
                    }`}
                  />
                </button>
                {/* Dropdown items */}
                <ul
                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                    openDropdown === item.name
                      ? `max-h-[${item.children.length * 3}rem]`
                      : "max-h-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <li
                      key={child}
                      className="px-4 py-2 text-sm rounded-md hover:bg-indigo-500 hover:text-white cursor-pointer text-gray-300 transition-colors duration-200 border border-transparent hover:border-indigo-500"
                    >
                      <Link
                        to={`/tutorial/${child}`}
                        onClick={() => dispatch(setSidebar(false))}
                        className="block w-full h-full"
                      >
                        {child}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => dispatch(setSidebar(false))}
              >
                <div className="px-5 py-2 rounded-lg cursor-pointer text-gray-200 font-medium transition-all duration-200 border border-transparent hover:border-indigo-500 shadow-sm">
                  {item.name}
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-800 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Nextfill. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
