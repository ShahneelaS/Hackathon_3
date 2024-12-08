const JoinTheClub = () => {
  return (
    <section className="bg-[#F3F3F3] py-16 px-6 lg:px-20 text-center"> {/* Updated background color */}
      <div className="max-w-[1000px] mx-auto bg-white p-8 rounded-md"> {/* Increased container size */}
        {/* Heading */}
        <h2 className="text-[#2A254B] text-2xl sm:text-3xl font-ClashDisplay mb-4">
          Join the club and get the benefits
        </h2>
        
        {/* Subtext */}
        <p className="text-[#505977] text-base sm:text-md mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        
        {/* Email Input and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"> {/* Stack inputs on mobile, align horizontally on larger screens */}
          <input
            type="email"
            placeholder="Enter your email"
            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#2A254B] w-full sm:w-[300px]"
          />
          <button className="bg-[#2A254B] text-white px-6 py-3 rounded-md hover:bg-[#1d1a3a] w-full sm:w-auto mt-4 sm:mt-0">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinTheClub;
