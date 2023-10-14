import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full h-[70px]  left-0 transition-all duration-500 ${
          showNavbar ? "bg-[#040714]" : ""
        }`}
      >
        <div className="flex h-[70px]   px-7 justify-between items-center">
          {showNavbar && (
            <img
              className="w-[80px] cursor-pointer active:opacity-80 active:transition-all"
              src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
              alt=""
            />
          )}
          <div className="flex items-center gap-3">
            {showNavbar && (
              <Link
                to={"/signup"}
                className=" bg-[#0063e5] mr-28 text-center flex justify-center items-center text-[#f9f9f9] border-none uppercase text-xl active:opacity-80 h-[50px] px-2 sm:px-4 py-1 rounded"
              >
                Sign Up Now
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="fixed top-0 z-50 right-0 h-[70px] px-7 flex items-center ">
        <Link
          to={"/login"}
          className="uppercase bg-black flex justify-center items-center text-[18px] text-[#f9f9f9] h-[50px] px-5 py-2 border rounded border-[#f9f9f9] hover:bg-[#f9f9f9] hover:text-black transition-all"
        >
          Log In
        </Link>
      </div>
    </>
  );
}
