import React, { useState } from "react";

interface AdvanceSearchComponentProps {
  onSearch: (query: string, filters: Record<string, any>) => void;
}

const AdvanceSearchComponent: React.FC<AdvanceSearchComponentProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
  });

  const handleSearch = () => {
    // If a category is selected, redirect to category page
    if (filters.category) {
      window.location.href = `/${filters.category}`;
    } else if (onSearch && searchQuery.trim() !== "") {
      // Trigger parent component's search function
      onSearch(searchQuery, filters);
    }
  };

  // Handle filter changes
  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  return (
    <div className="p-4 bg-gray-100 border rounded-md">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">All Categories</option>
            <option value="plant-pots">Plant Pots</option>
            <option value="ceramics">Ceramics</option>
            <option value="tables">Tables</option>
            <option value="chairs">Chairs</option>
            <option value="crockery">Crockery</option>
            <option value="cutlery">Cutlery</option>
            <option value="tableware">Tableware</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">All Prices</option>
            <option value="0-50">0-50</option>
            <option value="51-100">51-100</option>
            <option value="101-200">101-200</option>
            <option value="200+">200+</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-4">
        <button
          onClick={handleSearch}
          className="w-full px-4 py-2 text-white bg-[#2A254B] rounded-md hover:bg-blue-900"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default AdvanceSearchComponent;
