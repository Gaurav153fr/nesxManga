import Link from "next/link"
import Image from "next/image"
type cardType={
    id:string,
    name:string|null,
    imgUrl:string|null,
}
export default function ContainerCard({id,name,imgUrl}:cardType) {
  const  linkPath:string =`/${id}/${name?.replaceAll(" ","-")}`
   // Array of predefined colors
   const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33B8', '#33FFFF', '#FF33FF', '#FFFF33', '#333333'];

   // Get a random color from the colors array
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
 
  return (
    <li>
    <Link href={linkPath}>
       <div>
         <div className="sm:h-52 h-40  overflow-hidden ">
            {imgUrl?
    (<Image className="  hover:brightness-100  brightness-75"
            src={imgUrl}
            alt={name?(name):("Image not found")}
            height={320}
            width={225}/>):(<span>Image not found</span>)}
    </div>
    
    <p className="bg-orange-700 text-black w-full px-1 text-ellipsis line-clamp-1 hover:underline ">
        {name}</p>
        <div className="flex w-full">
        <h3 className=" font-bold text-black  bg-green-600  shadow-lg px-1 hover:underline flex justify-between cursor-pointer flex-grow">
        ∑43
      </h3>
      <h3 className=" font-bold text-black  bg-cyan-600 shadow-lg px-1 hover:underline flex justify-between cursor-pointer w-full">
        5 ✪
      </h3>
      <h3 className=" font-bold text-black bg-amber-600  px-1 hover:underline flex justify-between cursor-pointer w-full">
        @mota
      </h3>
      </div>
      </div></Link>
  </li>
  )
}
