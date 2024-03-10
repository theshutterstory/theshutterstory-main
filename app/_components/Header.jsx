"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Register as Photographer",
      path: "/",
    },
  ];
  return (
    <div
      className="flex items-center 
    justify-between p-2 shadow-sm"
    >
      <div className="flex items-center gap-10">
        <Image
          src="/theshutterstory-logo.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className="hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-44 flex">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
