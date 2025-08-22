import React from "react";
import Link from "next/link";
import products from "@/data/data.json";

const ProductsPage = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-sky-600">
                  ${product.price}
                </span>
                <Link
                  href={`/products/${product.id}`}
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
