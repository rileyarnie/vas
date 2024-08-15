import React from "react";

const bottomMenuItems = [
  { id: 1, count: 0, label: "start trip" },
  { id: 2, count: 0, label: "message" },
  { id: 3, count: 0, label: "request interdiction" },
  { id: 4, count: 0, label: "train avance" },
  { id: 5, count: 0, label: "out" },
  { id: 6, count: 0, label: "wait license" },
  { id: 7, count: 0, label: "alert" },
  { id: 8, count: 0, label: "train ready" },
];

const BottomMenu = () => {
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-1 text-white ">
      {bottomMenuItems.map((menuItem) => (
        <div
          className="py-4 divide-solid divide-x-2 divide-red-600 border border-red-600"
          key={menuItem.id}
        >
          <p className="uppercase text-center">{`${menuItem.count} ${menuItem.label}`}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomMenu;
