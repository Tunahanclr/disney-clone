import React, { useCallback, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {Link} from"react-router-dom"
import { useNavigate } from "react-router-dom/dist";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  const handleSubmit = useCallback(
    (e) => {
      if (!email || !password) {
        return;
      }
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/login')
          alert('kayıt yapıldı')
        })
        .catch((e) => {
          console.log(e)
        });
    },
    [email, password]
  );
  return (
    <div className="h-[89vh] p-2 flex flex-col items-center">
      <div className="mt-9 w-full max-w-md sm:max-w-sm">
        <p className="text-[#cacaca] text-xs sm:text-[11px] text-left"></p>
        <div>
          <h3 className="text-lg mt-2 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-bold">
            Enter your Signup
          </h3>
          <p className="text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6 ">
          Use the email address, password, and name you've provided to access Disney+. Dive into a world where your favorite shows and movies come alive. The magic of Disney awaits you each time you log in!
          </p>
          <form onSubmit={handleSubmit} action="">
            <input
              className="bg-[#31343e]  mt-6 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="bg-[#31343e]  mt-3 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"} // showPassword state'ine göre input tipini değiştiriyoruz
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={(e) => {
                  e.preventDefault(); // Bu, formun gönderilmesini engeller
                  setShowPassword(!showPassword); // showPassword değerini değiştir
                }}
                className="cursor-pointer text-red-500 top-6 right-5 absolute "
              >
                {showPassword ? "Hide" : "Show"}{" "}
                {/* showPassword state'ine göre butonun metnini değiştir */}
              </div>
            </div>
            <button className="h-[3rem] w-full bg-[#0072d2] text-[#f9f9f9] text-[15px] font-bold px-[24px] rounded mt-5 active:opacity-60 transition-all">
              Signup
            </button>
            
          </form>
          <div />
        </div>
      </div>
    </div>
  );
}
