import React from "react";
import LinkData from "../data/LinkData.jsx";

const LinkDataComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {LinkData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow p-4 flex flex-col items-center"
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
