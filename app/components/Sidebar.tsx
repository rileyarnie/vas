import React, { useState } from "react";
import menuItems from "@/constants/menuItems";
import Image from "next/image";

const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <aside
      className={`h-screen border-r-2 shadow-lg ${
        open ? "w-[15rem]" : "w-[5rem]"
      } ease-in-out duration-150 pt-8 fixed bg-white z-10`}
    >
      <ul className="space-y-1 ease-in-out duration-200">
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className="flex space-x-3 p-3  align-middle items-center cursor-pointer hover:bg-gray-300"
          >
            <Image
              className=" object-contain h-5 w-5"
              src={menuItem.iconUrl}
              height={20}
              width={20}
              alt="train-icon"
            />
            <span className={!open ? " hidden" : ""}>{menuItem.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
