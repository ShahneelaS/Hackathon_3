import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationMessage("Thank you for your feedback!");
    setFeedback(""); // Clear the form
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your feedback here"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-[#2A254B] text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      {confirmationMessage && <p className="mt-4 text-gray-600">{confirmationMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
