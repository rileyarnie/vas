import React from "react";
import Navbar from "./Navbar";
import NavigationWrapper from "./NavigationWrapper";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {/* <NavigationWrapper /> */}
      <div className="mt-[8vh] ">{children}</div>
    </>
  );
};

export default LayoutWrapper;
