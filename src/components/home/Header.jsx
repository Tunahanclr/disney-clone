import React from "react";
import Logo from "../../assets/images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {BiDotsVerticalRounded} from"react-icons/bi"
import { useState } from "react";

export default function Header() {
  const [user]=useAuthState(auth)
  const [toggle,setToggle]=useState(false);
  const menuItems = [
    {
      title: "HOME",
      iconUrl:
        "https://drive.google.com/uc?id=1i-N5_YQwBPv1eSRm-EPQElJyzhCmecm8",
    },
    {
      title: "SEARCH",
      iconUrl:
        "https://drive.google.com/uc?id=1MqJm9uDvoXk1AnHhC3e9XKgTo8W4onp2",
    },
    {
      title: "WATCHLİST",
      iconUrl:
        "https://drive.google.com/uc?id=12zOt-Z2xn-VWVrkbykllrcacWOauv6Um",
    },
    {
      title:
        "ORIGINALS",
      iconUrl:
        "https://drive.google.com/uc?id=12zOt-Z2xn-VWVrkbykllrcacWOauv6Um",
    },
    {
      title: "MOVİES",
      iconUrl:
        "https://drive.google.com/uc?id=1kw-yU2u1rg2Fuy5RTb7--GjnzZJ10XbG",
    },
    {
      title: "SERİES",
      iconUrl:
        "	https://drive.google.com/uc?id=1XVwekS9Me_IDwMQ4L0uNGp3onymHxpey",
    },

    // ... Diğer menü maddeleri de bu şekilde ekleyebilirsiniz
  ];
  const handleSignOut=()=>{
    signOut(auth)
  }
  return (
    <div className="flex bg-[#090b13]  h-[70px] justify-between items-center p-4 sm:p-6">
      <div className="flex items-center gap-2 sm:gap-6 md:gap-8 text-[#f9f9f9]">
        <img
          className="sm:w-[120px] w-[80px] object-cover"
          src={Logo}
          alt="Logo"
        />
        <ul className="flex gap-2 sm:gap-6 md:gap-8  items-center">
          {menuItems.map((item,i) => (
            <li key={i} className=" hidden md:flex items-center text-sm whitespace-nowrap">
              <img
                className="w-5 object-cover mr-2"
                src={item.iconUrl}
                alt=""
              />
              <a href="#" className=" flex hover:underline underline-offset-8">
                {item.title}
              </a>
            </li>
          ))}
           {menuItems.map((item,index) => index < 3&& (
            <li key={index} className="md:hidden flex items-center text-sm whitespace-nowrap">
           <img
                className="w-5 object-cover mr-2"
                src={item.iconUrl}
                alt=""
              />
            </li>
          ))}
            <div onClick={()=>setToggle(!toggle)} className="md:hidden">
                <BiDotsVerticalRounded/>
              </div>
              {toggle && (
              <div className="absolute top-12 left-44 sm:left-72 mt-2 bg-[#090b13] py-2 border rounded shadow-xl">
                {menuItems.slice(3).map((item, i) => (
                  <li key={i} className="flex items-center text-sm whitespace-nowrap px-4 py-2 hover:bg-gray-200">
                    <img className="w-5 object-cover mr-2" src={item.iconUrl} alt="" />
                    <a href="#" className="flex">
                      {item.title}
                    </a>
                  </li>
                ))}
              </div>
            )}
        </ul>
      </div>
      <div className="group">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"          alt="User Avatar"
          className=" w-7 md:w-10 object-cover rounded-full"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all text-white bg-black right-9 h-8 flex justify-center items-center ">
              <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
