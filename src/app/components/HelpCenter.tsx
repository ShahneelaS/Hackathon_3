import React, { useState } from 'react';

const HelpCenter = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message) {
      alert('Help request sent: ' + message);
      setMessage(''); // Clear message after submission
    } else {
      alert('Please enter a message.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Help Center</h2>
      <p className="text-gray-700 mb-4">
        Need assistance? Please provide more details, and our support team will get back to you.
      </p>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={message}
          onChange={handleChange}
          className="w-full p-3 border rounded-md mb-4"
          rows={4}
          placeholder="Enter your issue or question here..."
        />
        <button
          type="submit"
          className="bg-[#2A254B] text-white p-3 rounded-md hover:bg-blue-900"
        >
          Submit Help Request
        </button>
      </form>
    </div>
  );
};

export default HelpCenter;
