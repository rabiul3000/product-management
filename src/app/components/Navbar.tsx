"use client";

import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full flex justify-between items-center bg-sky-500 px-8 py-4 shadow-md">
      {/* Brand */}
      <div className="text-2xl font-bold text-white">Eleget</div>

      {/* Links */}
      <ul className="flex gap-8 items-center text-white font-medium">
        <li>
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-gray-200 transition">
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/add-product"
            className="hover:text-gray-200 transition"
          >
            Add Product
          </Link>
        </li>

        {/* Auth Section */}
        {!session ? (
          <li>
            <Link href="/login" className="hover:text-gray-200 transition">
              Login
            </Link>
          </li>
        ) : (
          <li className="flex items-center gap-3">
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-white"
              loading="lazy"
            />
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-sm bg-white text-sky-600 px-3 py-1 rounded-md hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
