"use client";

import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import { useAppContext } from "@/context/AppContext";
import { toast, Toaster } from "react-hot-toast";
import SocialShare from "../../components/SocialShare";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const PAGE_SIZE = 5; // Number of products per page

const ProductPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { addToCart, addToWishlist } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const count = await client.fetch(
          `count(*[_type == "product"])`
        );

        const productData = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc) [$start...$end]{
            _id,
            name,
            price,
            image,
            description,
            stockStatus
          }`,
          { start: (currentPage - 1) * PAGE_SIZE, end: currentPage * PAGE_SIZE }
        );

        setProducts(productData);
        setTotalPages(Math.ceil(count / PAGE_SIZE));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`); // Show success toast
  };

  const handleAddToWishlist = (product: any) => {
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`); // Show success toast
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <Toaster position="top-center" /> {/* Add Toaster for displaying notifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg">
              <Image
                src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600 my-2">{product.description}</p>
              <p className="text-gray-900 font-semibold">${product.price}</p>
              <p
                className={`text-sm ${
                  product.stockStatus === "In Stock" ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.stockStatus || "Out of Stock"}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="w-full py-2 mt-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Add to Wishlist
              </button>

              {/* Social Share Component */}
              <div className="mt-4">
                <SocialShare productName={product.name} /> {/* Pass product details if required */}
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
