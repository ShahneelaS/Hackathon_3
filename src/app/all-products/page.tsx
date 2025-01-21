"use client";

import { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import Navbar from "../components/Navbar";
import FooterProductPage from "../components/FooterProductPage";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

// Create the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
function urlFor(source: any) {
  return builder.image(source);
}

// Type for the product and category
interface Product {
  _id: string;
  name: string;
  price: number;
  image: any;
  category: {
    name: string;
  };
  type: string;
  brand: string;
  date: string;
}

interface Category {
  _id: string;
  name: string;
}

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("date");

  // Fetch categories and products
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      // Fetching Categories
      const categoryData = await client.fetch(`*[_type == "category"]`);
      setCategories(categoryData);

      // Fetching Products
      const productData = await client.fetch(
        `*[_type == "product"]{
          _id,
          name,
          price,
          image,
          category->{
            name
          },
          type,
          brand,
          date
        }`
      );
      setProducts(productData);
      setFilteredProducts(productData);
    };

    fetchCategoriesAndProducts();
  }, []);

  // Filter Products Based on selected filters
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category?.name === selectedCategory
      );
    }

    if (selectedType) {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange
        .split("-")
        .map((val) => (val === "+" ? Infinity : Number(val)));
      filtered = filtered.filter(
        (product) =>
          product.price >= minPrice && product.price <= (maxPrice || Infinity)
      );
    }

    if (sortBy === "date") {
      filtered = filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "price") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  }, [
    selectedCategory,
    selectedType,
    selectedBrand,
    selectedPriceRange,
    sortBy,
    products,
  ]);

  return (
    <div>
      <Navbar />

      {/* Image Below Navbar */}
      <div className="relative">
        <Image
          src="/Frame 143.png"
          alt="Banner"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Filter and Sort Section */}
      <div className="mb-6 p-4 bg-gray-100 flex flex-wrap items-center justify-between space-x-4 space-y-4 sm:space-y-0">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        >
          <option value="">All Types</option>
          <option value="Type1">Type1</option>
          <option value="Type2">Type2</option>
        </select>

        {/* Brand Filter */}
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        >
          <option value="">All Brands</option>
          <option value="Brand1">Brand1</option>
          <option value="Brand2">Brand2</option>
        </select>

        {/* Price Filter */}
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        >
          <option value="">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500+">$500+</option>
        </select>

        {/* Sort By */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        >
          <option value="date">Sort by Date</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
          >
            {product.image ? (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg mb-4 w-full h-auto"
              />
            ) : (
              <div className="h-48 bg-gray-300 mb-4 w-full"></div>
            )}
            <h3 className="font-bold text-[#2A254B]">{product.name}</h3>
            <p className="text-[#505977]">${product.price}</p>
            <div className="flex space-x-2 mt-2">
              <Link
                href={`/productpage/${product._id}`}
                className="px-4 py-2 bg-[#2A254B] text-white rounded hover:bg-green-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <FooterProductPage />
    </div>
  );
};

export default AllProductsPage;
