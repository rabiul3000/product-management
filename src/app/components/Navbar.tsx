import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar w-full flex justify-between items-center  bg-sky-500">
      <div className="px-12 text-xl">Eleget</div>
      <ul className="flex p-4 gap-12 bg-sky-500 w-full justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/login"}>Login</Link>
        <li>Add Product</li>
      </ul>
    </nav>
  );
};

export default Navbar;
