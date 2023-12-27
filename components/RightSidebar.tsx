"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AddCollectionButton from './AddCollectionButton';
import { getById, getChapterList } from '@/lib/fetch';
import ChapterListItem from './chapter-list-item';
// ... (your imports)
// import necessary modules and components

export default function RightSidebar({ mangaId,series }: { mangaId: string,series:string }) {
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  const [data, setData] = useState<infoData>(); // Assuming data will be of 
  const [chapters, setChapters] = useState<ChapterData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getById(mangaId);
        setData(fetchedData);
        const fetchChapters = await getChapterList(mangaId);
        setChapters(fetchChapters);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if necessary
      }
    };

    fetchData();
  }, [mangaId]);

  const toggleSynopsis = () => {
    setIsSynopsisOpen(!isSynopsisOpen);
  };

  return (
    <div className="border-l-2 border-l-slate-700 w-full h-screen">
      <div className=''> 
        {data ? (
          <div className=' py-5 no-scrollbar w-100  p-5'>
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

            <div className="h-16 w-16 m-auto mt-5 rounded-full overflow-hidden">
              {data.url ? <img src={data.url} alt="title-thumbnail" width={64} height={64} /> : null}
            </div>

            <h3 className="font-extrabold m-auto  text-black  bg-gray-50   text-center mt-5  px-1">{data.name}</h3>

           
            <h3 className=" font-bold text-black  bg-cyan-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
             by @{data.author}
            </h3>

            <h3 className="font-extrabold text-black  bg-amber-600 mt-5  shadow-lg px-1 hover:underline flex justify-between cursor-pointer" onClick={toggleSynopsis}>
              Synopsis :<span>⤵</span>
            </h3>
            <div
              className={`text-gray-200 overflow-y-scroll transition-all duration-500 ease-in-out border-2 border-gray-700 p-1 ${
                isSynopsisOpen ? 'max-h-[200px]' : 'max-h-0 opacity-0'
              }`}
            >
              {data.synopsis}
            </div>

            <h3 className=" font-bold  mt-5 mb-2 px-1 ">
              Genre
            </h3>
            <div className='flex gap-2  flex-wrap w-full'>
              {data.genres.map((genre) => (
                <h3 key={genre.id} className=" font-bold text-black  bg-blue-400  shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-fit">
                  #{genre.name}
                </h3>
              ))}
            </div>
            <h3 className=" font-bold  mt-5 mb-2 px-1 ">
              Chapters:
            </h3>
            <section>
              {chapters ? (
                <ul className='h-60 bg-black overflow-y-scroll py-5 border-2 border-gray-700 no-scrollbar'>
                  {chapters.map((chapter, index) => (
                    <li key={index}><ChapterListItem chapter={chapter.name} url={chapter.thumbnail} series={series} 
                    chapterId={chapter.id}/></li>
                  ))}
                </ul>
              ) : (
                <p>Loading Chapters</p>
              )}
            </section>
          </div>
        ) : (
          <div className='w-full h-screen fixed right-0'>Loading...</div>
        )}
      </div>
    </div>
  );
}
