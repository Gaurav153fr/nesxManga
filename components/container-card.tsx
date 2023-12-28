import Link from "next/link";
import Image from "next/image";

interface CardData {
  id: string;
  name?: string;
  url?: string;
  views: number;
  lastChapter?: { name: string };
  genre?: string;
  slug: string;
}

export default function ContainerCard({
  id,
  name,
  url,
  views,
  lastChapter,
  slug,
}: CardData) {
  const linkPath: string = `/${id}/${slug}`;
  const chapterPath = "/";

  return (
    <div className="">
      <div className="block w-50 h-fit ">
        <div className="sm:h-40 h-[300] w-50 overflow-hidden">
          {url ? (
            <Image
              className="hover:brightness-100 brightness-90 object-cover"
              src={url}
              alt={name ? name : "Image not found"}
              height={450}
              width={300}
            />
          ) : (
            <span>Image not found</span>
          )}
        </div>

        <Link
          href={linkPath}
          className="bg-orange-700 font-bold text-md text-black w-full px-1 text-ellipsis line-clamp-1 hover:underline"
        >
          {name}
        </Link>

        <div className="flex h-5 items-center justify-around">
          {lastChapter ? (
            <Link
              href={chapterPath}
              className="px-1 px-auto text-center text-nowrap text-black text-xs bg-green-600 shadow-lg hover:underline flex justify-between cursor-pointer flex-grow"
            >
              Ch {lastChapter.name}
            </Link>
          ) : null}
          <h3 className="text-center text-nowrap text-black bg-cyan-600 text-xs shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-full">
            {views} views
          </h3>
        </div>
      </div>
    </div>
  );
}
