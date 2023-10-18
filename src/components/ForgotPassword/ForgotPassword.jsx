import React, { useCallback, useState } from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { ToastContainer, toast } from "react-toastify";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success(
            "    Check your email box you will be redirected to the login page."
          );
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((e) => {
          toast.error(e.message);
        });
    },
    [email]
  );
  return (
    <div className="h-[89vh] p-2 flex flex-col items-center">
      <ToastContainer />
      <div className="mt-9 w-full max-w-md sm:max-w-sm">
        <div>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
            className=" mx-auto w-[172px]"
            alt=""
          />
          <h3 className="text-lg mt-4 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-extrabold">
            First write your email address and then check your email box.
          </h3>
          <p className="text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6">
            You need to verify your e-mail address. Write your e-mail address
            and click on the link to your e-mail code.
          </p>
          <form onSubmit={handleSubmit} action="">
            <input
              className="bg-[#31343e]  mt-6 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="h-[3rem] w-full bg-[#0072d2] text-[#f9f9f9] text-[15px] font-bold px-[24px] rounded mt-5 active:opacity-60 transition-all"
            >
              send e-mail
            </button>
            <div className="mt-2">
              <Link
                className="text-blue-500 hover:underline transition-all  text-sm"
                to="/login"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
