import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">Eleget</h2>
          <p className="mt-2 text-sm text-gray-200">
            Your one-stop shop for electronics and gadgets.  
            Quality products at the best prices.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/dashboard/add-product" className="hover:underline">
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              🐦
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              👍
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              📸
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              💼
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-400 mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
