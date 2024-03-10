"use client";
import PhotographerList from "@/app/_components/PhotographerList";
import React, { useEffect } from "react";
import Image from "next/image";

const Search = ({ params }) => {
  return (
    <div>
      <PhotographerList />
    </div>
  );
};

export default Search;
