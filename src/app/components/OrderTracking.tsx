import React from 'react';

interface Order {
  id: number;
  date: string;
  status: string;
}

interface OrderTrackingProps {
  orderHistory: Order[];
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ orderHistory }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Tracking</h3>
      <ul className="list-disc pl-5">
        {orderHistory.length === 0 ? (
          <li className="text-gray-600">No orders found</li>
        ) : (
          orderHistory.map((order) => (
            <li key={order.id} className="text-blue-600">
              <a href={`/orders/${order.id}`} className="underline">
                Order {order.id} - {order.status} ({order.date})
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default OrderTracking;
