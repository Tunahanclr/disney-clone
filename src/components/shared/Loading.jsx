import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#020713] flex justify-center items-center">
      <div className="w-20 h-20 border-t-4 border-[#3498db] border-solid rounded-full animate-spin"></div>
    </div>
  );
}
