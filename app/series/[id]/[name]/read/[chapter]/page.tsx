import { getChapterData } from "@/lib/fetch"
export default async function Home({params}:{params:{id:number}}){

const res= await getChapterData(params.id)
const data= res
const mediaUrl = "https://media.flixscans.org/"
return(<main className="w-full h-fit flex flex-col bg-white items-center">
 {data.chapterData.webtoon.map((e,i)=>(

<img key={i} src={mediaUrl+e} alt="chapterImg" className="w-1/2 shadow-lg"/>
))} 

    </main>)
}