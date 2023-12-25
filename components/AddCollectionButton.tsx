"use client";
import { useState, useEffect } from "react";
import PButton from "./primary-button";
export default function AddCollectionButton({ id, imgUrl, link }: { id: string; imgUrl: string; link: string }) {
  const [isAdded, setIsAdded] = useState(() => {
    const storedIsAdded = localStorage.getItem(`isAdded_${id}`);
    return storedIsAdded ? JSON.parse(storedIsAdded) : false;
  });

  const handleClick = () => {
    const existingCollection = JSON.parse(localStorage.getItem("UserCollectionObject") || "[]");

    if (!isAdded) {
      const collectedObject = {
        id: id,
        imgUrl: imgUrl,
        link: link,
      };
      existingCollection.push(collectedObject);
      localStorage.setItem("UserCollectionObject", JSON.stringify(existingCollection));
      setIsAdded(true);
      localStorage.setItem(`isAdded_${id}`, JSON.stringify(true));
    } else {
      const updatedCollection = existingCollection.filter((item:any) => item.id !== id);
      localStorage.setItem("UserCollectionObject", JSON.stringify(updatedCollection));
      setIsAdded(false);
      localStorage.removeItem(`isAdded_${id}`);
    }

    window.dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    localStorage.setItem(`isAdded_${id}`, JSON.stringify(isAdded));
  }, [id, isAdded]);

  return (
    <div>
     
        {isAdded ? 
      <PButton onClick={handleClick} text="- Remove" variant="secondary"/>
      :
      <PButton onClick={handleClick} text="+ Add to Fav" />}

    </div>
  );
}
