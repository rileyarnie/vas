import React from "react";
import Button from "../components/Button";

const items: {
  id: number;
  label: string;
}[] = [
  {
    id: 1,
    label: "free message",
  },
  {
    id: 2,
    label: "immediate stop",
  },
  {
    id: 3,
    label: "support",
  },
  {
    id: 4,
    label: "restriction",
  },
  {
    id: 5,
    label: "remove locomotive",
  },
  {
    id: 6,
    label: "train data",
  },
  {
    id: 7,
    label: "menu ",
  },
  {
    id: 8,
    label: "logout",
  },
];

const QuickMenu = () => {
  return (
    <div className=" space-y-2">
      <div className="space-x-4 pl-4">
        <Button text="Delete Request" />
        <Button text="Scroll to" />
      </div>
      <div className="text-black grid grid-cols-2 gap-1 px-[2px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-md grid items-center"
          >
            <p className="text-center capitalize text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickMenu;
