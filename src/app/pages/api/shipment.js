export async function handler(req, res) {
  const { trackingNumber } = req.body;

  if (!trackingNumber) {
    return res.status(400).json({ error: "Tracking number is required" });
  }

  console.log("Received tracking number:", trackingNumber);  

  // Fetch shipment details from Shippo API
  const shipmentDetails = await fetchShipmentDetails(trackingNumber);

  if (shipmentDetails.error) {
    console.log('Error fetching shipment details:', shipmentDetails.error);  
    return res.status(400).json({ error: shipmentDetails.error });
  }

  console.log("Fetched shipment details:", shipmentDetails);  

  return res.status(200).json(shipmentDetails);
}

async function fetchShipmentDetails(trackingNumber) {
  try {
    const apiKey = process.env.SHIPPO_API_KEY;
    if (!apiKey) {
      throw new Error('API Key is missing.');
    }

    const response = await fetch('https://api.goshippo.com/tracks/', {
      method: 'POST',
      headers: {
        'Authorization': `ShippoToken ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tracking_number: trackingNumber }),
    });

    // Log the response for debugging
    console.log("Shippo API Response:", response);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return { error: errorData.error_message || 'Error from Shippo API' };
    }
  } catch (error) {
    console.error('Error fetching shipment details:', error);
    return { error: error.message || 'Error fetching shipment details' };
  }
}
