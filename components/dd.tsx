"use client";
import React, { useState } from "react";

export default function Details({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative w-fit overflow-hidden ">
      <div
        style={{ width: "200vw" }}
        className={` sm:w-full transition-all ${
          isClicked ? "-translate-x-1/2" : ""
        }`}
      >
        {children}
      </div>
      <button onClick={handleClick} className="fixed bottom-0">
        click me
      </button>
    </div>
  );
}
