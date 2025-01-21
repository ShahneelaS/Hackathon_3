import Image from 'next/image'; 

const StudioToGlobal = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-white py-20 px-6 lg:px-20">
      {/* Left Section */}
      <div className="flex-1 mb-8 lg:mb-0 flex flex-col justify-between">
        <div>
          <h2 className="text-[#2A254B] text-2xl sm:text-3xl lg:text-[32px] font-ClashDisplay mb-6">
            From a studio in London to a global brand with
          </h2>
          <h3 className="text-[#2A254B] text-2xl sm:text-3xl lg:text-[32px] font-ClashDisplay mb-6">
            over 400 outlets
          </h3>

          <p className="text-[#505977] text-md sm:text-lg mb-4">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className="text-[#505977] text-md sm:text-lg mb-6">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>
        <div className="mt-auto">
          <button className="bg-[#F9F9F9] text-[#2A254B] px-8 py-3 font-ClashDisplay text-sm sm:text-base">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1">
        <Image
          src="/Image.png" 
          alt="Studio to Global"
          layout="responsive" 
          width={1000}  
          height={600}  
          className="object-cover" 
        />
      </div>
    </section>
  );
};

export default StudioToGlobal;
