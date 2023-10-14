import React from "react";

export default function Footer() {
  return (
    <footer className=" text-gray-400 px-8 py-12 mt-20">
      <div className="max-w-7xl mx-auto flex-col flex justify-center items-center">
        {/* Logo */}
        <img
          className="w-[80px] mb-8 md:mb-0"
          src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
          alt="Disney+"
        />

        {/* Links */}
        <div className="mt-3 text-xs flex-wrap flex gap-4">
          <a href="" className="block hover:text-white">
            Subscriber Agreement
          </a>
          <a href="" className="block hover:text-white">
            Privacy Policy
          </a>
          <a href="" className="block hover:text-white">
            Supported Devices
          </a>
          <a href="" className="block hover:text-white">
            EMEA Privacy Rights
          </a>
          <a href="" className="block hover:text-white">
            Cookies Policy
          </a>
          <a href="" className="block hover:text-white">
            Interest-Based Ads
          </a>
          <a href="" className="block hover:text-white">
            Supported Devices
          </a>
          <a href="" className="block hover:text-white">
            Help Centre
          </a>
        </div>
        <div className="mt-2 flex gap-3 text-xs">
          <a href="" className="block hover:text-white">
            About us
          </a>
          <a href="" className="block hover:text-white">
            Manage Preferences
          </a>
        </div>
        <span className="text-center text-[#c0c0c0] mt-5 text-xs">
          © 2023 Disney and its related entities. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
