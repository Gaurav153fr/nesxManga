"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AddCollectionButton from './AddCollectionButton';
import { getById } from '@/lib/fetch';

export default function RightSidebar({ mangaId }: { mangaId: string }) {
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  const [data, setData] = useState<any>({}); // Assuming data will be of a specific type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getById(mangaId);
        setData(fetchedData); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if necessary
      }
    };

    fetchData(); // Call the fetchData function
  }, [mangaId]); // Add mangaId as a dependency to fetch data when it changes

  // Toggling the synopsis visibility
  const toggleSynopsis = () => {
    setIsSynopsisOpen(!isSynopsisOpen);
  };

  return (
    <div className="p-5 h-screen fixed  border-l-2 border-l-slate-700">
      <div className="flex justify-between">
        <Link href="/" className="hover:underline">
          Back
        </Link>
        {data.url && data.id ? (
          <AddCollectionButton imgUrl={data.url} link={`/${mangaId}/${data.name?.replaceAll(' ', '-')}`} id={mangaId} />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="h-16 w-16 m-auto mt-5 rounded-full overflow-hidden">{data.url ? <img src={data.url} alt="title-thumbnail" /> : null}</div>
      <h3 className="font-extrabold m-auto  text-black  bg-gray-50   text-center mt-5 w-fit px-1">{data.name}</h3>
      <h3 className=" font-bold  mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        author
      </h3>
      <h3 className=" font-bold text-black  bg-cyan-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
       @mukesh ambani
      </h3>
      <h3 className="font-extrabold text-black  bg-amber-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer" onClick={toggleSynopsis}>
        Synopsis :<span>⤵ </span>
      </h3>
      <div
        className={` text-gray-200 overflow-y-scroll transition-all duration-500 ease-in-out border-2 border-gray-700 p-1 ${
          isSynopsisOpen ? 'max-h-[200px]' : 'max-h-0 opacity-0'
        }`}
      >
        {data.synopsis}
      </div>
      <h3 className=" font-bold  mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        other
      </h3>
      <div className='flex gap-2'>
      <h3 className=" font-bold text-black  bg-green-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        5 star
      </h3>
      <h3 className=" font-bold text-black  bg-blue-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        4200 Liked
      </h3>
      <h3 className=" font-bold text-black  bg-orange-700 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        20 chapter
      </h3></div>
      <h3 className=" font-bold  mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        genre
      </h3>
      <div className='flex gap-2'>
      <h3 className=" font-bold text-black  bg-blue-400 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        #action
      </h3>
      <h3 className=" font-bold text-black  bg-fuchsia-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
        #adventure
      </h3></div>
    </div>
  );
}
