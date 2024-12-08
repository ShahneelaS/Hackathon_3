import Link from 'next/link';

const ProductList = () => {
  const products = [
    { id: '1', name: 'The Dandy Chair', price: '$499.99' },
    { id: '2', name: 'The Classic Sofa', price: '$799.99' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-12">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#2A254B]">{product.name}</h3>
            <p className="text-md text-[#505977] mt-2">{product.price}</p>
          </div>
          <div className="bg-[#2A254B] text-center py-4">
            <Link href={`/productpage/${product.id}`}>
              <a className="text-white text-lg font-medium hover:underline">View Product</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
