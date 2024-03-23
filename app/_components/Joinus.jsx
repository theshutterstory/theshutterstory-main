import React from "react";
import joinUs from "../../public/joinus.png";
import Image from "next/image";

const Joinus = () => {
  return (
    <div>
      <div className="md:flex-row flex-col items-center flex justify-center">
        <Image src={joinUs} className="rounded-sm md:w-2/5 p-4 md:p md:p-0" />
        <div className="p-5 justify-center">
          <div className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent text-xl md:text-6xl font-bold pb-10">
            Are you a Photographer
          </div>
          <div className="text-2xl mb-8">Be a part of, theshutterstory</div>
          <button className="bg-black text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-slate-500">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
