import Link from "next/link"
import Image from "next/image"
interface params{
    chapter:string,
    url:string,
    series:string,
    chapterId:number,

}
export default function ChapterListItem({chapter,url,series,chapterId}:params){
    const imgUrl =`https://media.flixscans.org/${url}`
    const linkPath = `/series/${chapterId}/${series}/read/chapter-${chapter}`
return(<div className=" h-fit overflow-hidden mb-1">
<Link href={linkPath} className="flex bg-[#1e1f22] items-center hover:underline py-2 ">
    <span className="  over-flow-hidden pl-2 ">
    <Image src={imgUrl} height={64} width={64} alt={chapter} className="object-none h-18" /></span>
    <p className="ml-5 text-center">Chapter: {chapter}</p></Link>
</div>)
}