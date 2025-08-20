import React from "react";
import LinkData from "../data/LinkData.jsx";

const LinkDataComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {LinkData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow p-4 flex flex-col items-center bg-blue-500"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <img src={item.image} alt={item.alt} className="w-16 h-16 mb-2" />
            <p className="text-lg font-semibold">{item.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default LinkDataComponent;
