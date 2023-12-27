"use client";
import React, { useState, useEffect } from 'react';
import SideBarItem from './left-sidebar-fav-item';
import Link from 'next/link';
interface CollectionDataType {
  imgUrl: string;
  link: string;
}

export default function LeftSideBar(): JSX.Element {
  const [collection, setCollection] = useState<CollectionDataType[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleStorageChange = () => {
      const dataString = localStorage.getItem('UserCollectionObject');
      if (dataString) {
        const data: CollectionDataType[] = JSON.parse(dataString);
        setCollection(data);
      }
    };

    // Listen for changes in localStorage
    window.addEventListener('storage', handleStorageChange);

    // Initial load of collection from localStorage
    handleStorageChange();

    return () => {
      // Cleanup - remove the event listener
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update activeIndex based on some condition or user interaction
  const handleItemClick = (index: number) => {
    setActiveIndex(index); // Change the active index based on user interaction, etc.
  };

  return (
    <div className='pr-1  py-5 bg-[#1e1f22] border-r-2 border-gray-600 h-screen fixed'>
      <Link className='bg-cyan-600 px-1 hover:underline' href="/home">/Home</Link>
      {collection.map((item, index) => (
        <SideBarItem
          key={index}
          imgUrl={item.imgUrl}
          link={"/home/"+item.link}
          isActive={index === activeIndex}
          onClick={() => handleItemClick(index)} // Pass a click handler to update activeIndex
        />
      ))}
    </div>
  );
}
