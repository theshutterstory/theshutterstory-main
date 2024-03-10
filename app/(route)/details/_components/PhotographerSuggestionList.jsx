"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import photographerList from "../../../../app/_components/tempdata/photographerData.json";

function PhotographerSuggestionList() {

  return (
    <div className=" p-4 border-[1px] mt-2 md:ml-5 rounded-lg ">
      <h2 className="mb-3 font-bold">Suggestions</h2>

      {photographerList.map((photographer, index) => (
        <Link
          href={"/details/"+photographer.id}
          className=" mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3"
        >
          <Image
            src={photographer.avatarImg}
            width={70}
            height={70}
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <div className="mt-3 flex-col flex gap-1 items-baseline">
            <h2
              className="text-[10px] bg-blue-100 p-1 rounded-full px-2
                     text-primary"
            >
              {photographer.category}
            </h2>
            <h2 className="font-medium text-sm">
              {photographer.photographerName}
            </h2>
            <h2 className="text-primary text-xs flex gap-2">
              {/* <GraduationCap/> */}
              {/* {photographer.attributes.Year_of_Experience} */}2 Years
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PhotographerSuggestionList;
