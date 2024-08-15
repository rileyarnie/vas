import React from "react";
import { StationType } from "@/constants/stations";
import train from "../../public/assets/train_left.png";
import Image from "next/image";

const Station: React.FC<{ station: StationType }> = ({ station }) => {
  return (
    <div className="text-white bg-black">
      {/* <h4 className="px-2 py-1 mb-12 bg-red-500 w-fit">{station.name}</h4> */}
      <div className="flex">
        {station.stops.map((stop, index) => (
          <div key={stop.id} className="w-[18.75rem] h-[300px]">
            <h4 className=" bg-red-600 rounded-sm text-center py-1 w-fit px-2 mb-28">{`${
              stop.name
            } ${index + 1}`}</h4>
            <div className=" flex items-end space-x-16">
              <div
                className=""
                style={{
                  height: "0px",
                  width: "100px",
                  borderBottom: "40px solid white",
                  borderLeft: "15px solid transparent",
                  borderRight: "15px solid transparent",
                }}
              >
                <div
                  className="mx-auto"
                  style={{
                    height: "0px",
                    width: "60px",
                    borderTop: "10px solid white",
                    borderBottom: "30px solid black",
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                  }}
                >
                  <p className="text-center my-auto py-2 text-xs">
                    {stop.name}
                  </p>
                </div>
              </div>{" "}
              {stop.train && (
                <Image
                  src={train}
                  alt="train"
                  className="scale-x-[-1]"
                  height={50}
                  width={50}
                />
              )}
            </div>
            <div
              className={`${
                stop.train ? "bg-red-600" : "bg-white"
              } text-black text-sm py-1`}
            >
              <p className="text-center">{stop.speed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Station;
