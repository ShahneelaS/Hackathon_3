'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define types for the shipment status response
interface ShipmentStatus {
  tracking_number: string;
  status: string;
  delivery_date: string;
  carrier: string;
  details: string;
}

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState<ShipmentStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/track-shipment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setShipmentStatus(data);
      } else {
        setError(data.error || 'Unknown error');
      }
    } catch (error) {
      setError('Error fetching shipment details');
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Track Your Shipment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-800 text-white font-bold rounded-lg hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Track Shipment
          </button>
        </form>

        {/* Display shipment status */}
        {shipmentStatus && (
          <div className="mt-6 p-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Shipment Status</h3>
            <p><strong>Status:</strong> {shipmentStatus.status}</p>
            <p><strong>Carrier:</strong> {shipmentStatus.carrier}</p>
            <p><strong>Delivery Date:</strong> {shipmentStatus.delivery_date}</p>
            <p><strong>Details:</strong> {shipmentStatus.details}</p>
          </div>
        )}

        {/* Display error */}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </main>
      <Footer />
    </>
  );
};

export default TrackingForm;
