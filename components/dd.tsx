"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Details({ children }: { children: React.ReactNode }) {
  const location = usePathname();
  const [isTranslated, setIsTranslated] = useState(false);
  const [isImg, setisimg] = useState(false);

  useEffect(() => {
    // Check if the device width is small (e.g., less than 768px)
    const isSmallWidth = window.innerWidth < 768;

    // Determine if the pathname starts with a number pattern and if the width is small
    const startsWithNumber = /^\/\d+\/.*/.test(location);

    setIsTranslated(startsWithNumber && isSmallWidth);
    const p = location.includes("/read");
    setisimg(p);
  }, [location]);

  return (
    <div className="relative w-fit overflow-hidden">
      <div
        className={`flex w-[200vw] transition-all duration-500 ease-in-out ${
          isTranslated ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        {children}
      </div>
      {isImg ? (
        <button
          className="fixed bottom-4 right-10 bg-red-600 p-2 rounded-lg"
          onClick={() => setIsTranslated(!isTranslated)}
        >
          📄
        </button>
      ) : null}
    </div>
  );
}
