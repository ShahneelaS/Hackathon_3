const PopularProducts = () => {
  return (
    <section className="bg-[#F9F9F9] py-20 px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-[#2A254B] text-2xl font-ClashDisplay mb-12 text-center">
        Our popular products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Product 1 */}
        <div>
          <img
            src="/sofa.png" 
            alt="The Poplar suede sofa"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
          />
          <p className="text-center mt-4 text-lg">The Poplar suede sofa</p>
          <p className="text-center text-gray-600">£980</p>
        </div>

        {/* Product 2 */}
        <div>
          <img
            src="/Parent.png" 
            alt="The Dandy chair"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
          />
          <p className="text-center mt-4 text-lg">The Dandy chair</p>
          <p className="text-center text-gray-600">£250</p>
        </div>

        {/* Product 3 */}
        <div>
          <img
            src="/Parent (4).png" 
            alt="The Dandy chair"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
          />
          <p className="text-center mt-4 text-lg">The Dandy chair</p>
          <p className="text-center text-gray-600">£250</p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-[#E0E0E0] text-[#2A254B] px-8 py-3 font-ClashDisplay rounded-lg hover:bg-[#D1D1D1]">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default PopularProducts;
