"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (res.ok) {
        setMessage("✅ Product added successfully!");
        setTimeout(() => {
          router.push("/products");
        }, 1500);
      } else {
        setMessage("❌ Failed to add product.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-6 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={formData.image_url}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition flex items-center justify-center gap-2"
          >
            {loading && (
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-gray-700 font-medium">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default AddProductForm;
