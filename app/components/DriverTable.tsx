import React from "react";

const DriverTable = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="">
        <h4 className="px-1 text-white">Driver</h4>
        <div className="text-black bg-white h-full border-r border-gray-300 px-1">
          <p className="capitalize">actas driver</p>
        </div>
      </div>
      <div className="">
        <h4 className="px-1 text-white">Origin</h4>
        <div className="text-black bg-white h-full border-r border-gray-300 px-1">
          <p className=" uppercase">Nairobi Central Station</p>
        </div>
      </div>
      <div className="">
        <h4 className="px-1 text-white">Dest</h4>
        <div className="text-black bg-white h-full border-r border-gray-300 px-1">
          <p className="uppercase">Embaskasi Village</p>
        </div>
      </div>
      <div className="">
        <h4 className="px-1 text-white">Status</h4>
        <div className="text-black bg-white h-full border-r border-gray-300 px-1">
          <p className="capitalize">rejected</p>
        </div>
      </div>
    </div>
  );
};

export default DriverTable;
