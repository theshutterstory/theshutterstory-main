import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import appMcp from "../../public/app mcp.png";

const FeaturingApp = () => {
  return (
    <div>
      <div className="md:flex-row flex-col items-center flex justify-center pb-10">
        <div className="p-5 justify-center">
          <div className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
            We'r launching our app soon...
          </div>
          <div className="text-2xl mb-8">
            Stay tuned, for more exciting updates.
          </div>
          <button className="bg-black text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-slate-500">
            Join Us
          </button>
        </div>
        <Image src={appMcp} className="rounded-sm md:w-2/5 p-4 md:p md:p-0" />
      </div>
    </div>
  );
};

export default FeaturingApp;
