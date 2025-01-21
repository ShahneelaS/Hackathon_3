
import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
  addresses: string[];
  orderHistory: { id: number; date: string; status: string }[];
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, addresses, orderHistory }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
      <div className="mb-4">
        <p className="font-medium text-gray-700">Name: {name}</p>
        <p className="font-medium text-gray-700">Email: {email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Saved Addresses:</h3>
        <ul className="list-disc pl-5">
          {addresses.map((address, index) => (
            <li key={index} className="text-gray-600">{address}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Order History:</h3>
        <ul className="list-disc pl-5">
          {orderHistory.map((order) => (
            <li key={order.id} className="text-blue-600">
              <a href={`/orders/${order.id}`} className="underline">
                Order {order.id} - {order.status} ({order.date})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
