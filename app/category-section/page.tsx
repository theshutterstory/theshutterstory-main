'use client';

import React from "react";
import Image from "next/image";

const features = [
    {
        name: "Wedding",
        description: "This is the first feature of our product.",
        image: "/images/logo/cat1.png",
        alt: "image"
    },  
    {
        name: "Portrait",
        description: "This is the first feature of our product.",
        image: "/images/logo/cat2.png",
        alt: "image"
    },
    {
        name: "Product",
        description: "This is the first feature of our product.",
        image: "/images/logo/cat3.png",
        alt: "image"
    },
    {
        name: "Architecture",
        description: "This is the first feature of our product.",
        image: "/images/logo/cat4.png",
        alt: "image"
    },
    {
        name: "Baby shoot",
        description: "This is the first feature of our product.",
        image: "/images/logo/cat5.png",
        alt: "image"
    }
]


const CategorySection = () => {
    return ( 
        <div className="">    
        <div className="flex-col items-center justify-center">
        <div className="text-sm font-bold flex justify-center md:text-xl pb-5 bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent">Categories</div>
        <div className="grid grid-cols-1 md:grid md:grid-cols-5 gap-4 md:px-40">
            {features.map((feature,index) => (
                <div key={index} className="flex-col space-y-6 rounded-xl items-center justify-center w-full transform transition-all duration-500 ease-in-out shadow-lg">
                    <div className="text-gray-600 font-bold">
                        <Image src={feature.image} alt={feature.alt} width={600} height={300}
                        className="object-contain  items-center justify-center flex p-1"/>
                    </div>
                    <div>
                        <div className="text-lg font-medium flex items-center justify-center pb-2">{feature.name}</div>
                    </div>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    );
}
 
export default CategorySection;