"use client";
import React, { useState, useEffect } from "react";
import SideBarItem from "./left-sidebar-fav-item";
import Link from "next/link";

interface CollectionDataType {
  imgUrl: string;
  link: string;
}

export default function LeftSideBar(): JSX.Element {
  const [collection, setCollection] = useState<CollectionDataType[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sidebarWidth, setSidebarWidth] = useState<string>("w-0");

  useEffect(() => {
    const handleStorageChange = () => {
      const dataString = localStorage.getItem("UserCollectionObject");
      if (dataString) {
        const data: CollectionDataType[] = JSON.parse(dataString);
        setCollection(data);
      }
    };

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Initial load of collection from localStorage
    handleStorageChange();

    return () => {
      // Cleanup - remove the event listener
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleSidebarWidth = () => {
    // Toggle sidebar width between w-0 and w-20
    setSidebarWidth(sidebarWidth === "w-0" ? "w-20" : "w-0");
    console.log(sidebarWidth);
  };

  // Update activeIndex based on some condition or user interaction
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`h-full flex flex-col z-50 bottom-0 transition-all  duration-300 overflow-hidden  ${sidebarWidth}`}
    >
      <Link
        href="/"
        className=" bg-indigo-500 hover:bg-indigo-700 text-white font-bold  rounded-full m-auto self-center p-5 mt-5  "
      >
        🏠
      </Link>

      <div
        className={`h-screen overflow-y-scroll rounded-lg no-scrollbar bg-gray-900 mt-10`}
      >
        {collection.map((item, index) => (
          <SideBarItem
            key={index}
            imgUrl={item.imgUrl}
            link={item.link}
            isActive={index === activeIndex}
            onClick={() => {
              handleItemClick(index);
              toggleSidebarWidth(); // Toggle width on item click
            }}
          />
        ))}
      </div>
      <button
        className="fixed bottom-4 z-[60] left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleSidebarWidth}
      >
        👁️
      </button>
    </div>
  );
}
