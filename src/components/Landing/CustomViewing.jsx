import React from "react";
import vieving from "../../assets/vieving.jpg";
export default function CustomViewing() {
  return (
    <div className="mt-20 text-center ">
      <h1 className="text-white font-bold mb-[20px] sm:mb-[30px] text-lg sm:text-[44px]">
        Watch the way you want
      </h1>
      <p className="text-[#C0C0C0] text-base   sm:text-[20px]">
        Enjoy the world’s greatest stories - anytime, anywhere.
      </p>
      <div className="flex justify-center items-center">
        <img className="object-cover sm:mt-5 mt-16" src={vieving} alt="" />
      </div>
    </div>
  );
}
