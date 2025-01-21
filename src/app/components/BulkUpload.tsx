import React, { useState } from 'react';
import axios from 'axios';

interface Product {
  name: string;
  price: number;
  category: string;
}

const BulkUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<Product[]>([]);
  const [uploading, setUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);  
      setParsedData(response.data); 

      setUploading(false);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        className="mt-2 bg-[#2A254B] text-white p-2 rounded"
        onClick={handleFileUpload}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>

      {parsedData && Array.isArray(parsedData) && parsedData.length > 0 ? (
        <div className="mt-4">
          <h3 className="font-bold text-lg">Parsed Data:</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {parsedData.map((product, index) => (
                <tr key={index}>
                  <td className="border p-2">{product.name}</td>
                  <td className="border p-2">{product.price}</td>
                  <td className="border p-2">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default BulkUpload;
