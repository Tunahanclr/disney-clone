import React from "react";

export default function AuthFooter() {
  return (
    <footer className=" h-32 flex flex-col items-center justify-center bg-[#0e0b14]">
      <img
        className="w-20"
        src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney+"
      />
      <div className="flex flex-wrap text-xs mt-4 text-white gap-5">
        <a href="#" className="hover:text-white">
          Subscriber Agreement
        </a>
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white">
          Cookies Policy
        </a>
        <a href="#" className="hover:text-white">
          Interest-Based Ads
        </a>
        <a href="#" className="hover:text-white">
          Subscriber Agreement
        </a>
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white">
          Cookies Policy
        </a>
        <a href="#" className="hover:text-white">
          Interest-Based Ads
        </a>
      </div>
    </footer>
  );
}

{
  /* <div className='flex gap-5'>
<a href='#' className='hover:text-white'>Subscriber Agreement</a>
<a href='#' className='hover:text-white'>Privacy Policy</a>
<a href='#' className='hover:text-white'>Cookies Policy</a>
<a href='#' className='hover:text-white'>Interest-Based Ads</a>
</div> */
}
