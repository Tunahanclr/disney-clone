import React from "react";
import movie from "../../assets/movie.png";
import computer from "../../assets/computer.png";
import user from "../../assets/user.png";

export default function PlatformFeatures() {
  return (
    <div className="h-full gap-[24px] mt-8  flex-wrap flex justify-center items-center">
      <div className="">
        <img src={movie} alt="" />
        <h3 className="mt-[20px] text-[28px] leading-7 text-[#f9f9f9] text-center">
          Endless entertainment
        </h3>
        <p className="text-sm text-center mt-4 text-[#c0c0c0] ">
          Explore thousands of hours of TV series, movies and originals.
        </p>
      </div>
      <div className="">
        <img src={computer} alt="" />
        <h3 className="mt-[20px] text-[28px] leading-7 text-[#f9f9f9] text-center">
          Endless entertainment
        </h3>
        <p className="text-sm text-center mt-4 text-[#c0c0c0] ">
          Explore thousands of hours of TV series, movies and originals.
        </p>
      </div>
      <div className="">
        <img src={user} alt="" />
        <h3 className="mt-[20px] text-[28px] leading-7 text-[#f9f9f9] text-center">
          Endless entertainment
        </h3>
        <p className="text-sm text-center mt-4 text-[#c0c0c0] ">
          Explore thousands of hours of TV series, movies and originals.
        </p>
      </div>
    </div>
  );
}
