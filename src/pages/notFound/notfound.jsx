import React from "react";
import { Link } from "react-router-dom";

export default function notfound() {
  return (
    <div className="h-screen text-red-500 text-5xl flex flex-col justify-center items-center">
      NOT FOUND
      <Link to={"/"} className="text-blue-500 font-bold m-2">
        GO HOME
      </Link>
    </div>
  );
}
