import React, { useEffect } from "react";
import gallerImg from "../../../../app/_components/tempdata/galleryData.json";

const Gallery = () => {
  useEffect(() => {
    console.log(gallerImg);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(gallerImg) &&
            gallerImg.map((item, index) => (
              <div key={index} className="w-full">
                <img src={item.img} alt="galleryImg" className="w-full" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
