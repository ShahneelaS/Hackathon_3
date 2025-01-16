export default {
    name: 'schema',
    title: 'Marketplace Schemas',
    types: [
      {
        name: 'product',
        title: 'Product',
        type: 'document',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'price', type: 'number' },
          { name: 'category', type: 'string' },
          { name: 'stock', type: 'number' },
          { name: 'rating', type: 'number' },
          { name: 'reviews', type: 'array', of: [{ type: 'reference', to: [{ type: 'review' }] }] },
          { name: 'image', type: 'url' },
          { name: 'description', type: 'text' }
        ]
      },
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }
        ]
      },
      {
        name: 'order',
        title: 'Order',
        type: 'document',
        fields: [
          { name: 'orderID', type: 'string' },
          { name: 'customerID', type: 'reference', to: [{ type: 'customer' }] },
          { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
          { name: 'totalAmount', type: 'number' },
          { name: 'paymentStatus', type: 'string' },
          { name: 'deliveryStatus', type: 'string' },
          { name: 'orderDate', type: 'datetime' }
        ]
      },
      {
        name: 'payment',
        title: 'Payment',
        type: 'document',
        fields: [
          { name: 'paymentID', type: 'string' },
          { name: 'orderID', type: 'reference', to: [{ type: 'order' }] },
          { 
            name: 'paymentMethod', 
            type: 'string', 
            options: {
              list: [
                { title: 'Credit Card', value: 'credit_card' },
                { title: 'Cash on Delivery (COD)', value: 'cod' },
                { title: 'Bank Transfer', value: 'bank_transfer' }
              ]
            }
          },
          { name: 'paymentStatus', type: 'string' },
          { name: 'paymentDate', type: 'datetime' },
          { name: 'amount', type: 'number' }
        ]
      }
      ,
      {
        name: 'shipment',
        title: 'Shipment',
        type: 'document',
        fields: [
          { name: 'shipmentID', type: 'string' },
          { name: 'orderID', type: 'reference', to: [{ type: 'order' }] },
          { name: 'trackingID', type: 'string' },
          { name: 'carrier', type: 'string' },
          { name: 'shipmentStatus', type: 'string' },
          { name: 'estimatedDelivery', type: 'datetime' }
        ]
      },
      {
        name: 'review',
        title: 'Review',
        type: 'document',
        fields: [
          { name: 'reviewID', type: 'string' },
          { name: 'productID', type: 'reference', to: [{ type: 'product' }] },
          { name: 'customerID', type: 'reference', to: [{ type: 'customer' }] },
          { name: 'rating', type: 'number' },
          { name: 'comment', type: 'text' },
          { name: 'reviewDate', type: 'datetime' }
        ]
      },
      {
        name: 'returnPolicy',
        title: 'Return Policy',
        type: 'document',
        fields: [
          { name: 'returnPolicyID', type: 'string' },
          { name: 'orderID', type: 'reference', to: [{ type: 'order' }] },
          { name: 'returnStatus', type: 'string' },
          { name: 'returnReason', type: 'text' },
          { name: 'refundAmount', type: 'number' },
          { name: 'returnDate', type: 'datetime' }
        ]
      }
    ]
  }
  