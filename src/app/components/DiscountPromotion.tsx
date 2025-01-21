import React, { useState } from 'react';

const DiscountPromotion = () => {
  const [discount, setDiscount] = useState('');

  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.value);
  };

  const handleApplyDiscount = () => {
    // Handle discount logic here
  };

  return (
    <div>
      <h2>Discounts & Promotions</h2>
      <input
        type="text"
        placeholder="Enter discount code"
        value={discount}
        onChange={handleDiscountChange}
      />
      <button onClick={handleApplyDiscount}>Apply Discount</button>
    </div>
  );
};

export default DiscountPromotion;
