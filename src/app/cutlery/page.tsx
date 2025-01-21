import { client, urlFor } from '../../sanity/lib/client';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Image from 'next/image'; 


interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: {
    _type: string;
    asset?: {
      _ref: string;
      _type: string;
    };
  };
}

export default async function Cutlery() {
  const products: Product[] = await client.fetch(
    `*[_type == "product" && category->name == "Cutlery"]{
      _id,
      name,
      description,
      price,
      image
    }`
  );

  if (!products || products.length === 0) {
    return (
      <>
        <Navbar />
        <div className="p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Cutlery</h1>
          <p className="text-center text-gray-500">No products found in this category.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Cutlery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg flex flex-col">
              {product.image?.asset ? (
                <Image
                src={urlFor(product.image).width(300).height(200).url()}
                alt={product.name}
                width={300} 
                height={200}
                className="w-full h-48 object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded mb-4">
                  <span className="text-sm text-gray-500">No Image Available</span>
                </div>
              )}
              <h2 className="text-lg sm:text-xl font-semibold">{product.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{product.description}</p>
              <p className="text-base sm:text-lg font-bold mt-auto">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
