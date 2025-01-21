export async function handler(req, res) {
    const { trackingNumber } = req.body;
  
    // Fetching shipment details from Shippo API
    const shipmentDetails = await fetchShipmentDetails(trackingNumber);
  
    if (shipmentDetails.error) {
      console.log('Error fetching shipment details:', shipmentDetails.error);
      return res.status(400).json({ error: shipmentDetails.error });
    }
  
    return res.status(200).json(shipmentDetails);
  }
  
  async function fetchShipmentDetails(trackingNumber) {
    try {
      // Shippo API endpoint
      const response = await fetch('https://api.goshippo.com/track/', {
        method: 'POST',
        headers: {
          'Authorization': 'ShippoToken YOUR_SHIPPO_API_KEY', // Replace with actual Shippo API key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tracking_number: trackingNumber,
        }),
      });
  
      // Log the response for debugging
      console.log('Shippo API Response:', response);
  
      // If the response is successful
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        return { error: errorData.error_message };
      }
    } catch (error) {
      console.error('Error fetching shipment details:', error);
      return { error: 'Error fetching shipment details' };
    }
  }
  