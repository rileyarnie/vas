"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const NavigationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Navbar setOpen={toggleSidebar} open={open} />
      <Sidebar open={open} />
      <div
        className={`${
          open ? "ml-[15rem]" : "ml-[5rem]"
        } mt-[8vh] ease-in-out duration-150 `}
      >
        {children}
      </div>
    </div>
  );
};

export default NavigationWrapper;
