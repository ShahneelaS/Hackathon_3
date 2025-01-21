
import React, { useState } from 'react';

const ReviewsRating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    if (rating && review.trim()) {
      // Simulate submitting the review and rating (e.g., send to API)
      console.log('Review submitted:', review, 'Rating:', rating);
      // Clear the input fields after submission
      setRating(0);
      setReview('');
    } else {
      alert('Please provide both rating and review');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Submit Your Review</h3>
      <div className="mb-4">
        <label className="font-medium text-gray-700">Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={handleRatingChange}
          min="1"
          max="5"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
      </div>
      <input
        type="text"
        placeholder="Enter your review"
        value={review}
        onChange={handleReviewChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleSubmitReview}
        className="bg-[#2A254B] text-white px-4 py-2 rounded-lg"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewsRating;
