"use client";
import React, { useEffect } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import categoryList from "../../../../app/_components/tempdata/categoryData.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const params = usePathname();
  const category = params.split("/")[2];

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="h-screen fixed mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList.map((item, index) => (
              <CommandItem key={index}>
                <Link
                  href={'/search/'+item.mainCategory}
                  className={`p-2 cursor-pointer rounded-md w-full ${
                    category == item.mainCategory && "bg-gray-200 w-full"
                  }`}
                >
                  <label>{item.mainCategory}</label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
