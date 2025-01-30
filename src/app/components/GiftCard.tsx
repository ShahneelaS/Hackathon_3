import React, { useState } from 'react';

const GiftCard: React.FC = () => {
  const [giftCardCode, setGiftCardCode] = useState("");
  const [message, setMessage] = useState("");

  const handleRedeem = () => {
    if (giftCardCode === "GIFT100") {
      setMessage("Gift card successfully redeemed!");
    } else {
      setMessage("Invalid gift card code.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Gift Card</h3>
      <input
        type="text"
        placeholder="Enter gift card code"
        value={giftCardCode}
        onChange={(e) => setGiftCardCode(e.target.value)}
        className="p-2 border border-gray-300 rounded-md mb-4 w-full"
      />
      <button
        onClick={handleRedeem}
        className="bg-[#2A254B] text-white px-4 py-2 rounded-md"
      >
        Redeem
      </button>
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );
};

export default GiftCard;
