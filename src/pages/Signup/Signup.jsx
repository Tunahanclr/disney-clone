import React, { useState } from "react";
import Loading from "../../components/shared/Loading";
import { useEffect } from "react";
import Sign from "../../components/signup/Signup";
import AuthFooter from "../../components/shared/AuthFooter";
import Navbar from "../../components/signup/Navbar";
export default function Signup() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="bg-[#1a1d29] h-screen">
        <Navbar />
        <Sign/>
        <AuthFooter/>
      </div>
    </>
  );
}
