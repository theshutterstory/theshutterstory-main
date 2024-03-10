import Image from "next/image";
import Link from "next/link";
import React from "react";
import photographerList from "./tempdata/photographerData.json";

function PhotographerList({ heading = "Featured Photographers" }) {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">{heading}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-4 lg:grid-cols-4">
        {photographerList.length > 0
          ? photographerList.map((photographer, index) => (
              <div
                className="relative border-[0.5px] rounded-sm p-3 cursor-pointer hover:shadow-2xl transition-all ease-in-out "
                key={index}
              >
                <h2 className="absolute top-2 right-2 z-10 text-[10px] bg-black text-white p-1 rounded-sm px-2 text-primary">
                  {photographer.category}
                </h2>
                <Image
                  src={photographer.bgImg}
                  alt="photographer"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-sm"
                ></Image>
                <div className="flex mt-4">
                  <Image
                    src={photographer.avatarImg}
                    alt="doctor"
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <div className="ml-3 flex flex-col">
                    <h2 className="font-bold">
                      {photographer.photographerName}
                    </h2>
                    <h2 className="text-primary text-sm">
                      {photographer.studioName}
                    </h2>
                    <h2 className="text-gray-500 text-sm">
                      {photographer.location}
                    </h2>
                  </div>
                </div>
                <Link
                  href={"/details/" + photographer.id}
                  className="w-full mt-2"
                >
                  <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-sm w-full text-center text-[11px] cursor-pointer hover:bg-primary hover:text-white">
                    View Profile
                  </h2>
                </Link>
              </div>
            ))
          : // Skeleton Effect
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"
                key={index}
              ></div>
            ))}
      </div>
    </div>
  );
}

export default PhotographerList;
