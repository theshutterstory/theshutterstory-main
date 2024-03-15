"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categoryList from "./tempdata/categoryData.json";

function CategorySearch() {
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2
        className="font-bold
        text-4xl tracking-wide"
      >
        Search Photographers
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Photographers and Book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Display List of Category  */}
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 ">
        {categoryList.length > 0
          ? categoryList.map(
              (item, index) =>
                index < 6 && (
                  <Link
                    href={"/search/" + item.mainCategory}
                    key={index}
                    className="flex 
          flex-col text-center items-center
           bg-gray-200 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
                  >
                    <Image
                      className="rounded-sm"
                      width={140}
                      height={160}
                      src={item.categoryImg}
                      alt="icon"
                    />
                    <label className="text-black text-sm">
                      {item.mainCategory}
                    </label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className=" bg-slate-200 m-2
       w-[130px] h-[120px] rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
