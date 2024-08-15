"use client";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import logo from "/public/assets/logo.png";
import MenuIcon from "/public/assets/icons/bars-solid.svg";
import Avatar from "/public/assets/useravatar.png";
import Chevron from "/public/assets/icons/angle-up-solid.svg";
import Bell from "/public/assets/icons/bell-solid.svg";

const hours = new Date().getHours();

const Navbar: React.FC<{
  setOpen: () => void;
  open: boolean;
}> = ({ setOpen, open }) => {
  const [greeting, setGreeting] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNotification = () => {
    setMenuOpen(false);
    setNotificationOpen(!notificationOpen);
  };
  const handleMenu = () => {
    setNotificationOpen(false);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (hours < 12) {
      setGreeting("Morning");
    } else if (hours >= 12 && hours <= 17) {
      setGreeting("Afternoon");
    } else if (hours >= 17 && hours <= 24) {
      setGreeting("Evening");
    }
  }, []);
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 h-[8vh] z-10 flex items-center justify-between py-[.5rem] pr-[1rem]">
      <div className="flex space-x-6">
        <button className="p-3" onClick={setOpen}>
          <Image
            className=" object-contain h-6 w-6"
            src={MenuIcon}
            height={20}
            width={20}
            alt="menu-icon"
          />
        </button>
        <Image
          className="object-contain"
          src={logo}
          alt="logo"
          height={120}
          width={120}
        />
      </div>
      <div className="flex px-4 items-center space-x-2">
        <div className=" relative hover:bg-gray-300">
          <button className="p-3 cursor-pointer" onClick={handleNotification}>
            <Image
              className=" object-contain h-6 w-6 text-green-500"
              src={Bell}
              height={20}
              width={20}
              alt="train-icon"
            />
          </button>
          <div className=" bg-red-500 absolute top-0 right-0 rounded-fll h-[18] w-[18px] rounded-full text-white ">
            <p className=" text-xs text-center my-auto">0</p>
          </div>
          <div
            className={`flex flex-col mt-4 rounded-sm ${
              notificationOpen
                ? "bg-gray-50 h-[23.25rem] w-[18.875rem] absolute right-[0%] ease-in-out duration-200"
                : " hidden ease-in-out duration-200"
            }"`}
          >
            <p className="p-2 text-sm">Notifications</p>
            <div className="flex-1 border-y border-gray-300"></div>
            <p className="p-2 text-sm text-center">View all Notifications</p>
          </div>
        </div>
        <div
          className=" hover:bg-gray-300 cursor-pointer flex items-center space-x-3 p-2 "
          onClick={handleMenu}
        >
          <p className=" text-sm max-md:hidden">{`${greeting} Jeremy`}</p>
          <Image
            className=" object-contain h-8 w-8"
            src={Avatar}
            height={120}
            width={120}
            alt="avatar"
          />
          <Image
            className={`object-contain h-4 w-4 ${
              menuOpen ? "transform rotate-0" : "transform rotate-180"
            } ease-in-out duration-150`}
            src={Chevron}
            height={50}
            width={50}
            alt="avatar"
          />
          <div
            className={`flex flex-col mt-4 p-1 rounded-sm space-y-4 w-[13rem] ${
              menuOpen
                ? "bg-white  top-full absolute right-[2rem] ease-in-out duration-200"
                : " hidden ease-in-out duration-200"
            }"`}
          >
            <div className="flex px-2 justify-start align-middle items-center space-x-4">
              <Image
                className=" object-contain h-12 w-12"
                src={Avatar}
                height={120}
                width={120}
                alt="avatar"
              />
              <div className="">
                <p className="text-sm">Jeremy Alex</p>
                <p className="text-sm text-gray-400">User</p>
              </div>
            </div>
            <p className="border-t pt-2">Logout</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
