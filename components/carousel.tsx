'use client';

import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import Image from 'next/image';

const images = [
    {
        url: "/images/logo/p1.png",
        alt:"photographer"
    },
    {
        url: "/images/logo/p2.png",
        alt:"photographer"
    },
    {
        url: "/images/logo/p3.png",
        alt:"photographer"
    },
    {
        url: "/images/logo/p4.png",
        alt:"photographer"
    },
    {
        url: "/images/logo/p6.png",
        alt:"photographer"
    },
    {
        url: "/images/logo/p7.png",
        alt:"photographer"
    },
    {
        url: "/images/logo/p8.png",
        alt:"photographer"
    },
      {
        url: "/images/logo/p3.png",
        alt:"photographer"
    },
]

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect (()=>{
        const interval = setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>
                prevIndex == images.length - 1 ? 0 : prevIndex + 1)
        },2000)

        return ()=>{
            clearInterval(interval)
        }
    })

    return ( <div>
        <div className='items-center justify-center flex text-3xl font-bold md:pb-10 px-10 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent'>
            {/* Tell us your stories, let us frame your story. */}
   
        <div className='grid grid-cols-3 md:flex'>
            <AnimatePresence custom={currentImageIndex}>
                {images.map((image,index)=>(
                    <motion.div
                    key= {index}
                    initial={{opacity:0}}
                    animate={{
                        opacity: index === currentImageIndex ? 1 : 1,
                        scale : index === currentImageIndex ? 1.1 : 1,
                        transition :{ duration:0.5},
                    }}
                    >
                        <Image src={image.url} alt={image.alt} width={400} height={600} className="object-contain h-96 w-40 px-2 items-center justify-center flex mx-auto"/>
                    </motion.div>
                ))

                }
            </AnimatePresence>
        </div>
             </div>
    </div> );
}
 
export default Carousel;