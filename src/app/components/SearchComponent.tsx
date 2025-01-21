import React, { useState } from "react";
import Image from 'next/image';

interface SearchComponentProps {
  onSearch: (query: string) => void; // Accept a function as a prop
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Local state for search query

  const handleSearch = () => {
    if (onSearch && searchQuery.trim() !== "") {
      onSearch(searchQuery); // Call the onSearch function passed from the parent
    }
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update local state
        placeholder="Search..."
        className="w-full px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 text-gray-500 hover:text-gray-800"
      >
        <Image
          src="/search-icon.png"
          alt="Search Icon"
          width={20} 
          height={20} 
        />
      </button>
    </div>
  );
};

export default SearchComponent;
