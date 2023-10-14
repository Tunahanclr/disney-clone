import React from "react";
import computer from "../../assets/FavoriDevices/computer.png";
import tv from "../../assets/FavoriDevices/tv.png";
import consol from "../../assets/FavoriDevices/console.png";
import mobile from "../../assets/FavoriDevices/mobile.png";
export default function FavoriteDevices() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-white text-[40px] font-bold leading-[50px]">
          Available on your favourite devices
        </h2>
        <div className="mt-3 mx-auto flex items-center justify-center flex-wrap  sm:flex-nowrap">
          {/* <div>
          <img  src={tv} alt="" />
          <h3 className="mt-5 text-white text-[28px] leading-[38px] font-bold text-center">
            TV
          </h3>
          <p className="  mt-3  text-center text-[18px] leading-[24px] text-[#c0c0c0]">
            Amazon Fire TV
            <br />
            Android Tv
            <br />
            Apple Tv
            <br />
            Arçelik
            <br />
            Beko
            <br />
            Chomecast
            <br />
            Hisense
            <br />
            Lg
            <br />
            Panasonic
            <br />
            Samsung
            <br />
            Vestel
          </p>
        </div> */}
          <div>
            <img
              src="https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original"
              alt=""
            />
            <h3 className="mt-5 text-white text-[28px] leading-[38px] font-bold text-center">
              Computer
            </h3>
            <p className="  mt-3  text-center text-[18px] leading-[24px] text-[#c0c0c0]">
              Chrome OS
              <br />
              MacOS
              <br />
              Windows PC
              <br />
            </p>
          </div>
          <div>
            <img src={mobile} alt="" />
            <h3 className="mt-5 text-white text-[28px] leading-[38px] font-bold text-center">
              Mobile & Tablet
            </h3>
            <p className="  mt-3  text-center text-[18px] leading-[24px] text-[#c0c0c0]">
              Amazon Fire Tablets
              <br />
              Android Phones & Tablets
              <br />
              iPhone & iPad
              <br />
            </p>
          </div>
          <div>
            <img src={consol} alt="" />
            <h3 className="mt-5 text-white text-[28px] leading-[38px] font-bold text-center">
              Game Consoles
            </h3>
            <p className="  mt-3  text-center text-[18px] leading-[24px] text-[#c0c0c0]">
              PS4
              <br />
              PS5
              <br />
              Xbox One
              <br />
              Xbox Series X
              <br />
              Xbox Series S
              <br />
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-[#c0c0c0] mt-20">
        *Disney+ currently does not support Arçelik, Beko and Vestel smart TVs
        with Linux OS.
      </p>
    </>
  );
}
