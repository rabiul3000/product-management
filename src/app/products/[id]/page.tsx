import React from "react";
import Link from "next/link";
import products from "@/data/data.json";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductPageProps) => {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-sky-600 mb-6">
            ${product.price}
          </p>

          <div className="flex justify-between gap-4">
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
              Buy Now
            </button>
            <Link
              href="/products"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
