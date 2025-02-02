'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { useRouter } from 'next/navigation'; 

interface NewCeramicsProps {
  heading?: string; 
}

const NewCeramics = ({ heading = "New Ceramics" }: NewCeramicsProps) => {
  const router = useRouter(); 

  const handleViewCollection = () => {
    router.push('/all-products'); 
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <h2 className="text-[#2A254B] text-2xl font-ClashDisplay mb-12 text-center">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Link href="/productpage/1">
            <Image
              src="/Parent.png"
              alt="Product 1"
              width={500} 
              height={500} 
              className="w-full h-[300px] sm:h-[350px] md:h-[462px] object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-ClashDisplay text-[#2A254B]">The Dandy chair</h4>
              <p className="text-md text-[#505977]">£250</p>
            </div>
          </Link>
        </div>

        {/* Product 2 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Link href="/productpage/2">
            <Image
              src="/Parent (1).png"
              alt="Product 2"
              width={500} 
              height={500} 
              className="w-full h-[300px] sm:h-[350px] md:h-[462px] object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-ClashDisplay text-[#2A254B]">Rustic Vase Set</h4>
              <p className="text-md text-[#505977]">£155</p>
            </div>
          </Link>
        </div>

        {/* Product 3 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Link href="/productpage/3">
            <Image
              src="/Parent (2).png"
              alt="Product 3"
              width={500} 
              height={500} 
              className="w-full h-[300px] sm:h-[350px] md:h-[462px] object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-ClashDisplay text-[#2A254B]">The Silky Vase</h4>
              <p className="text-md text-[#505977]">£125</p>
            </div>
          </Link>
        </div>

        {/* Product 4 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Link href="/productpage/4">
            <Image
              src="/Parent (3).png"
              alt="Product 4"
              width={500} 
              height={500} 
              className="w-full h-[300px] sm:h-[350px] md:h-[462px] object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-ClashDisplay text-[#2A254B]">The Lucy Lamp</h4>
              <p className="text-md text-[#505977]">£399</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Button to view the full collection */}
      <div className="flex justify-center mt-8"> 
        <button 
          onClick={handleViewCollection} 
          className="bg-[#E0E0E0] text-[#2A254B] px-8 py-3 font-ClashDisplay rounded-lg hover:bg-[#D1D1D1]"
        >
          View Collection
        </button>
      </div>
    </section>
  );
};

export default NewCeramics;
