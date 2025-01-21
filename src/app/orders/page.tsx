
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Orders = () => {
  const orders = [
    { id: 1, product: 'Chair', status: 'Shipped', amount: '$50' },
    { id: 2, product: 'Table', status: 'Pending', amount: '$120' },
    { id: 3, product: 'Sofa', status: 'Delivered', amount: '$500' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Orders</h1>

        {/* Order List */}
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">{order.status}</td>
                <td className="py-2 px-4">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
