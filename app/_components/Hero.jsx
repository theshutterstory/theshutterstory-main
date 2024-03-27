import React from "react";

const Hero = () => {
  return (
    <div className="md:py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-950 spacey-10">
      <div className="container mx-auto text-center">
        <div className="text-2xl flex justify-center font-bold md:px-20 pb-6 md:text-6xl text-gradient bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
          Find Photographer in clicks
        </div>
        <p className="text-xs md:text-xl md:10 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
          It’s never been so easy to navigate through thousands of profiles of
          photographers, navigate, delve into their art and find a perfect fit.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-gray-800 to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 text-white px-8 py-2 mt-10 rounded-md text-lg">
            Explore
          </button>
        </div>
        <div className="mt-2 md:pt-10">
          <img
            src="herobg.png"
            alt="Background"
            className="rounded-xl w-full object-cover object-center"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
