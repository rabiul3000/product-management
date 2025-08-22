import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-50 flex justify-center items-center w-full mx-auto">
      <div className="w-9/12 text-center space-y-4">
        <h1 className="text-7xl font-semibold">
          Discover Worlds Easiest{" "}
          <span className="text-blue-600"> Product Management </span> System
        </h1>
        <p className="text-xl">
          Write, create, add and customize thousands of products with us
        </p>
        <div>
          <Link href={'/login'} className="border border-slate-100 p-2 cursor-pointer bg-amber-200 hover:bg-amber-300 active:bg-amber-400 rounded-xl">
            Login to explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
