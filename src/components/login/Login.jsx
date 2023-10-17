import React, { useCallback } from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom"
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom/dist";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = useCallback(
    (e) => {
      if (!email || !password){
        return;
      }
       e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/home");
          alert("hey you");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );
  return (
    <div>
      <div className="h-[89vh] p-2 flex flex-col items-center">
        <div className="mt-9 w-full max-w-md sm:max-w-sm">
          <p className="text-[#cacaca] text-xs sm:text-[11px] text-left"></p>
          <div>
            <h3 className="text-lg mt-2 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-bold">
              Enter your Login
            </h3>
            <p className="text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6 ">
              You will use this email and password to log into your Disney+
              account to watch your favourite shows and movies.
            </p>
            <form onSubmit={handleSubmit} action="">
              <input
                className="bg-[#31343e]  mt-6 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
                placeholder="Enter your email "
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="bg-[#31343e]  mt-4 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                />
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                  className="cursor-pointer text-red-500 top-7 right-5 absolute "
                >
                  {showPassword ? "Hide" : "Show"}{" "}
                </div>
              </div>
              <button className="h-[3rem] w-full bg-[#0072d2] text-[#f9f9f9] text-[15px] font-bold px-[24px] rounded mt-5 active:opacity-60 transition-all">
                Login
              </button>
              <div className="mt-4">
            <Link to='/forgot-password' className=" text-[14px] text-blue-600 hover:underline transition-all cursor-pointer">Forgot Password?</Link>
                  </div>
            </form>

            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
