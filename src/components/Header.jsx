import { useDispatch } from "react-redux";
import { setSidebar } from "../redux/sideSlice";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Header = () => {
  const navigate = useNavigate();
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
          stroke="#e50914"
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
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full pointer-events-none"></div>
      {/* User Button Top Right */}
  <div className="absolute right-2 top-2 sm:right-4 sm:top-4 flex flex-col sm:flex-row items-end sm:items-center gap-2 z-30">
        <SignedIn>
          <div className="flex items-center mt-4">
            <UserButton />
            <SignOutButton>
              <button className="ml-2 px-3 py-1 rounded bg-[#e50914] text-white font-bold hover:bg-[#b00610] transition hidden sm:inline-block">Sign Out</button>
            </SignOutButton>
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="px-3 py-1 rounded bg-[#e50914] text-white font-bold hover:bg-[#b00610] transition mt-4">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
