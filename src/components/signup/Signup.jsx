import React, { useCallback, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom/dist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  isValidName,
  isValidEmail,
  isValidPassword,
} from "../../validations/validation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [files, setFiles] = useState("");
  const [step, setStep] = useState(1);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const preventFormSubmitOnEnter = (e) => {
    if (e.key === "Enter" && step < 3) {
      e.preventDefault();
    }
  };
  const handleSubmit = useCallback(
    (e) => {
      if (!email || !password) {
        return;
      }
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          updateProfile(auth.user, { displayName: name, photoURL: files });
          toast.success("You are registered and directed to the login page.");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch((e) => {
          toast.error(e.message);
        });
    },
    [email, password, name, files]
  );

  const nextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      const error = isValidName(name);
      setNameError(error);
      if (error) return; // Hata varsa burada fonksiyonu sonlandır.
    }

    if (step === 2) {
      const error = isValidEmail(email);
      setEmailError(error);
      if (error) return;
    }

    if (step === 3) {
      const error = isValidPassword(password);
      setPasswordError(error);
      if (error) return;
    }

    if (step < 3) setStep(step + 1);
  };

  const isButtonDisabled = () => {
    if (step === 1 && !name) return true;
    if (step === 2 && !email) return true;
    if (step === 3 && !password) return true;
    return false;
  };

  return (
    <div className="h-[89vh] p-2 flex flex-col items-center">
      <ToastContainer />
      <div className="mt-9 w-full max-w-md sm:max-w-sm">
        <p className="text-[#cacaca] text-xs sm:text-[11px] text-left"></p>
        <div>
          <p className="text-xs text-[#cacaca]">Step {step} of 3</p>
          <form
            onSubmit={step == 3 ? handleSubmit : nextStep}
            onKeyPress={preventFormSubmitOnEnter}
          >
            {step == 1 && (
              <>
                <h3 className="text-lg mt-2 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-bold">
                  Enter your name
                </h3>
                <p className="text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6 ">
                  Join the world of Disney+ by creating your own unique
                  username. Be part of your favorite heroes, magical kingdoms,
                  and unforgettable moments. The username you choose will
                  transport you to the magical world of Disney every time you
                  log in. So think about which character or story represents you
                  best and join us!
                </p>
                <input
                  className="bg-[#31343e]  mt-3 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <div className="text-red-500 text-xs mt-2">{nameError}</div>
                )}
              </>
            )}
            {step == 2 && (
              <>
                <h3 className="text-lg mt-2 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-bold">
                  Enter your email
                </h3>
                <p className="text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6 ">
                  You will use this email and password to log into your Disney+
                  account to watch your favourite shows and movies.
                </p>
                <input
                  className="bg-[#31343e]  mt-3 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="text-red-500 text-xs mt-2">{emailError}</div>
                )}
              </>
            )}
            {step == 3 && (
              <>
                <h3 className="text-lg mt-2 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-bold">
                  Enter your password
                </h3>
                <p className="text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6 ">
                  You will use this email and password to log into your Disney+
                  account to watch your favourite shows and movies.
                </p>
                <div className="relative">
                  <input
                    className="bg-[#31343e]  mt-3 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"} // showPassword state'ine göre input tipini değiştiriyoruz
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <div className="text-red-500 text-xs mt-2">
                      {passwordError}
                    </div>
                  )}
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
              </>
            )}
            {step < 3 && (
              <button
                type="button"
                disabled={isButtonDisabled()} // Burada fonksiyonu doğru bir şekilde çağırıyoruz.
                className="h-[3rem] w-full bg-[#0072d2] text-[#f9f9f9] text-[15px] font-bold px-[24px] rounded mt-5 active:opacity-60 transition-all"
                onClick={nextStep}
              >
                Next
              </button>
            )}

            {step == 3 && (
              <button
                type="submit"
                className="h-[3rem] w-full bg-[#0072d2] text-[#f9f9f9] text-[15px] font-bold px-[24px] rounded mt-5 active:opacity-60 transition-all"
              >
                Signup
              </button>
            )}
          </form>
          <div />
        </div>
      </div>
    </div>
  );
}
