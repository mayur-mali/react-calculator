import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [oprand, setOprand] = useState();
  const backbtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      id="clear"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
      />
    </svg>
  );
  const numArray = [
    "AC",
    "+/-",
    "%",
    "C",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  const handleCalculation = (e) => {
    var value = e.target.attributes[1].nodeValue;
    setDisplay((previous) => (previous += value));
  };
  return (
    <div className="h-auto bg-red-200 rounded-lg overflow-hidden max-w-xs w-full">
      <div className="h-32 bg-black text-white font-bold text-4xl flex justify-end items-end pr-4 pb-4">
        {display}
      </div>
      <div className="h-auto text-white flex flex-wrap">
        {numArray.map((num, index) => (
          <div
            className="h-20 w-20 col-span-1 border cur flex justify-center items-center cursor-pointer text-black font-bold text-2xl bg-slate-100 "
            key={index}
            data-value={num}
            onClick={(e) => handleCalculation(e)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
