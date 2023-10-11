import React from "react";
import HeroBg from "../../assets/heroBg.jpg";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-x-hidden">
      <img
        className="w-full h-screen object-cover absolute top-0 left-0"
        src="https://cnbl-cdn.bamgrid.com/assets/223a08de8c12db28ff3b73a2374debc8eb68a6fecdf1dcf2c8cad17b35723f36/original"
        alt=""
      />
      <div className="z-10 mt-56 sm:mt-[332px] max-w-[1600px] sm:max-w-[1200px] text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-bold mb-4 leading-snug">
          Stream brand new Originals, blockbusters, binge-worthy series and more
        </h1>
        <p className="mt-4 text-xl text-white mb-5">Cancel at any time.*</p>
        <Link to="/signup">
          <button className="bg-[#016cf9] hover:bg-blue-600 active:bg-blue-500 active:opacity-80 transform h-[60px] px-16 sm:px-32 rounded transition-all duration-150 text-lg text-[#f9f9f9]">
            GET STARTED
          </button>
        </Link>
        <p className="mt-5 text-[20px] text-[#C0C0C0]">
          Get 12 months for the price of 10 with an annual subscription,
          compared to paying monthly.
        </p>
        <p className="mt-5 text-xs text-[#C0C0C0]">
          *effective at the end of the billing period. Subscription required.
        </p>
        <a
          href="#onlyondisney"
          className="text-[#c0c0c0] z-50 hover:text-white font-bold  mt-8 sm:mt-20 md:mt-40 flex justify-center animate-bounce"
        >
          <BsChevronDown size={"28px"} />
        </a>
      </div>
    </div>
  );
}
