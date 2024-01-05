'use client';

import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardContent} from "@/components/ui/card"
import Image from "next/image";


const featuredPhotographers = [
    {
        username:"shamvarma",
        name: "Wedding",
        description: "This is the first feature of our product.",
        image: "/images/logo/photogr1.png",
        alt: "image"
    },  
    {
        username:"shamvarma",
        name: "Portrait",
        description: "This is the first feature of our product.",
        image: "/images/logo/photogr2.png",
        alt: "image"
    },
    {
        username:"shamvarma",
        name: "Product",
        description: "This is the first feature of our product.",
        image: "/images/logo/photogr3.png",
        alt: "image"
    },
    {
        username:"shamvarma",
        name: "Architecture",
        description: "This is the first feature of our product.",
        image: "/images/logo/photogr4.png",
        alt: "image"
    },
    {
        username:"shamvarma",
        name: "Baby shoot",
        description: "This is the first feature of our product.",
        image: "/images/logo/photogr5.png",
        alt: "image"
    }
]



const PhotographerCard = () => {
    return ( <div>
                <div className="text-sm font-bold flex justify-center md:text-xl pt-10 pb-5 bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent">Featured Photographers</div>
         <div className="grid grid-cols-1 md:grid md:grid-cols-4 gap-4 md:px-40">         
                {featuredPhotographers.map((photographer,index) => (
                <div key={index} className="flex-col space-y-6 rounded-xl items-center justify-center w-full transform transition-all duration-500 ease-in-out shadow-lg">
                    <div className="text-gray-600 font-bold">
                        <Image src={photographer.image} alt={photographer.alt} width={600} height={300}
                        className="object-contain  items-center justify-center flex p-1"/>
                    </div>
                      <a href="#" rel="noopener noreferrer" target="_blank">
                        <CardContent className="flex flex-row items-center gap-4 p-6">
                            <Avatar>
                                <AvatarImage
                                    alt="photographer dp"
                                    className="rounded-full object-cover aspect-square"
                                    src="/images/logo/userImage.png"
                                />
                            <AvatarFallback>PH</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <Badge className="text-xs" variant="secondary">
                                @{photographer.username}
                            </Badge>
                            <h2 className="text-sm font-semibold">{photographer.name}</h2>
                        </div>
                        </CardContent>
                       </a>
                    </div>
                    ))}
         </div>
    </div> );
}
 
export default PhotographerCard;