import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-50 flex justify-center items-center w-full mx-auto">
      <div className="w-9/12 text-center space-y-4">
        <h1 className="text-7xl font-semibold">
          Discover Worlds Easiest{" "}
          <span className="text-blue-600"> Product Management </span> System
        </h1>
        <p className="text-xl">Write, create, add and customize thousands of products with us</p>
      </div>
    </div>
  );
};

export default Hero;
