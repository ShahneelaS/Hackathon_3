// src/app/components/FeedbackForm.tsx
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim()) {
      // Simulate submitting the feedback (e.g., send to API)
      console.log('Feedback submitted:', feedback);
      // Clear the feedback input after submission
      setFeedback('');
    } else {
      alert('Please enter feedback');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Submit Your Feedback</h3>
      <input
        type="text"
        placeholder="Enter your feedback"
        value={feedback}
        onChange={handleFeedbackChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#2A254B] text-white px-4 py-2 rounded-lg"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
