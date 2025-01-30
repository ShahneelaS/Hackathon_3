import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { client } from '@/sanity/lib/client';

const CheckoutFlow = () => {
  const { cart, clearCart } = useAppContext();

  const [formData, setFormData] = useState({
    billingAddress: '',
    shippingAddress: '',
    paymentMethod: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
    couponCode: '',
  });

  const [discount, setDiscount] = useState(0);
  const shippingFee = 5.99;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const applyCoupon = () => {
    if (formData.couponCode === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const finalAmount = totalAmount - discount + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }

    const order = {
      _type: 'order',
      products: cart.map(item => ({
        _key: item._id,
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      billingAddress: formData.billingAddress,
      shippingAddress: formData.shippingAddress,
      paymentMethod: formData.paymentMethod,
      totalAmount: finalAmount,
      createdAt: new Date().toISOString(),
    };

    try {
      await client.create(order);
      alert('Order placed successfully!');
      clearCart();
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          {cart.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2">
              {cart.map((item) => (
                <li key={item._id} className="text-sm">
                  {item.name} x{item.quantity} - ${item.price * (item.quantity || 1)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-red-500">Your cart is empty.</p>
          )}
        </div>

        {/* Total Amount, Coupon & Shipping Fee */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Total Billed Amount</h3>
          <p className="text-sm">Subtotal: ${totalAmount.toFixed(2)}</p>
          <p className="text-sm">Discount: -${discount.toFixed(2)}</p>
          <p className="text-sm">Shipping Fee: ${shippingFee.toFixed(2)}</p>
          <p className="text-lg font-bold">Final Total: ${finalAmount.toFixed(2)}</p>
        </div>

        {/* Coupon Code */}
        <div>
          <input type="text" name="couponCode" placeholder="Enter Coupon Code" value={formData.couponCode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          <button type="button" onClick={applyCoupon} className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Apply Coupon</button>
        </div>

        {/* Billing & Shipping Address */}
        <input type="text" name="billingAddress" placeholder="Billing Address" value={formData.billingAddress} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        <input type="text" name="shippingAddress" placeholder="Shipping Address" value={formData.shippingAddress} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        
        {/* Payment Method */}
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg">
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        
        {/* Credit Card Fields */}
        {formData.paymentMethod === 'creditCard' && (
          <>
            <input type="text" name="creditCardNumber" placeholder="Credit Card Number" value={formData.creditCardNumber} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="text" name="expirationDate" placeholder="Expiration Date" value={formData.expirationDate} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </>
        )}

        {/* Submit Button */}
        <button type="submit" className="w-full bg-[#2A254B] text-white py-2 rounded-lg hover:bg-blue-900">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutFlow;