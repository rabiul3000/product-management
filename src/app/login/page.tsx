"use client";

import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Login to Eleget
        </h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full py-3 px-4 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C34.9 32.7 30 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.4 16.1 18.8 14 24 14c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.6 29.6 4 24 4 16.3 4 9.6 8.1 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.5 0 10.4-2.1 14.1-5.6l-6.5-5.5C29.3 34.6 26.7 36 24 36c-6 0-10.9-3.3-13.3-8.1l-6.6 5.1C9.6 39.9 16.3 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.3-3.8 5.8-7.3 7.4l6.5 5.5C37.2 38.1 40 32.5 40 26c0-1.3-.1-2.7-.4-3.9z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
