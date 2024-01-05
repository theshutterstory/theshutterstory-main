'use client';

import React from "react";

const JoinUs = () => {
    return ( <div>
           <div className="md:flex-row flex-col items-center flex justify-center pb-10">
            <div className="p-5 justify-center md:w-1/3">
                <div className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
                    Are you a Photographer
                </div>
                <div className="text-2xl mb-8">Be a part of, theshutterstory</div>
                <button className="bg-black text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-slate-500">Join Us</button>
            </div>
                <img src="/images/logo/joinus-banner.png" className="rounded-xl md:w-2/5 p-4 md:p md:p-0"/>
        </div>
    </div> );
}
 
export default JoinUs;