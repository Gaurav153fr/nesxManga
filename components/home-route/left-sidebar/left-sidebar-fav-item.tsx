"use client"
import Link from "next/link";
import { MouseEvent } from "react";

interface SideBarItemProps {
  imgUrl: string;
  link: string;
  isActive: boolean;
  onClick: (event: MouseEvent<HTMLDivElement>) => void}

export default function SideBarItem({ imgUrl, link, isActive, onClick }: SideBarItemProps): JSX.Element {
  console.log(isActive);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    // Handle the click event
    onClick(event);
  };

  return (
    <div className={`flex items-center`} onClick={handleClick}>
       <div className={` w-1 rounded-tr-xl rounded-br-xl ${isActive?"h-8 bg-orange-600":"h-3 "} `}></div>
      <div
        className={`flex h-16 w-16 my-4 items-center rounded-[50%] justify-center overflow-hidden transition-all duration-200 ease-in-out hover:rounded-2xl`}
      >
        <Link href={link}>
          <div>
            {imgUrl ? <img src={imgUrl} alt="SideBarImg" width={225} height={320} /> : <>Img not found</>}
          </div>
        </Link>
      </div>
    </div>
  );
}
