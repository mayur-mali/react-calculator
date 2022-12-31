import React, { useState } from "react";
import "../calculator.css";
export default function Calculator() {
  // state for storing result
  const [result, setResult] = useState(0);
  // calculator buttons
  const numArray = [
    "Clear",
    "%",
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    "+",
    0,
    ".",
    "=",
  ];

  // single function for handling all calculations

  const handleCalculation = (e) => {
    // if result is 0 then clear 0 and continue with other number
    if (result === 0) {
      setResult("");
    }
    // concat the value togather
    setResult((previous) => (previous += e.target.value));
    if (e.target.value === "=") {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    }
    if (e.target.value === "Clear") {
      setResult(0);
    }
  };
  return (
    <div className="h-auto  rounded-lg overflow-hidden max-w-xs w-full">
      <div className="h-32 bg-black text-white font-bold text-4xl flex justify-end items-end p-4">
        {result}
      </div>
      <div className="h-auto grid grid-cols-4 text-white ">
        {numArray.map((num, index) => (
          <input
            className="h-20  col-span-1 text-center border focus:outline-none cursor-pointer text-black font-bold text-2xl bg-slate-100 "
            key={index}
            defaultValue={num}
            id={num}
            onClick={(e) => handleCalculation(e)}
          />
        ))}
      </div>
    </div>
  );
}
