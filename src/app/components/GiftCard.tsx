"use client";

import { useState } from "react";

const GiftCard = () => {
  const [code, setCode] = useState("");
  const [balance, setBalance] = useState<number | null>(null);

  const handleRedeem = () => {
    // Logic for redeeming gift card
    setBalance(100); // Placeholder balance
    alert("Gift Card Redeemed!");
  };

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gift Cards & Vouchers</h2>
      <input
        type="text"
        placeholder="Enter Gift Card Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleRedeem}
        className="w-full py-2 bg-[#2A254B] text-white rounded-lg"
      >
        Redeem
      </button>
      {balance !== null && (
        <p className="mt-4 text-green-500">Balance: ${balance}</p>
      )}
    </div>
  );
};

export default GiftCard;
