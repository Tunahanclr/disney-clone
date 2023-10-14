import React from "react";
import onlyon from "../../assets/onlyondisney.jpg";
import onlyres from "../../assets/onlyres.jpg";

export default function OnlyOnDisney() {
  return (
    <div
      id="onlyondisney"
      className="flex flex-col md:flex-row justify-center items-center bg-[#040714] "
    >
      <div className="flex flex-col justify-center items-center md:items-start md:ml-20 z-10">
        <h1 className="text-white text-center md:text-left text-xl sm:text-5xl font-extrabold mb-4 w-[400px]">
          Only on Disney+
        </h1>
        <p className="text-gray-400 text-center md:text-left text-xs sm:text-[20px] sm:max-w-[600px] max-w-[250px]">
          Exclusive movies, series, and originals you won’t find on any other
          streaming service.
        </p>
      </div>
      <div className="w-full ">
        <img
          className="w-full h-full hidden md:block object-cover rounded-xl shadow-xl"
          src={onlyon}
          alt="Only on Disney+"
        />
        <img className="mt-4 w-full flex md:hidden" src={onlyres} alt="" />
      </div>
    </div>
  );
}
