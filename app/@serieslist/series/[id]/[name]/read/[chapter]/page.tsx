import { getChapterData } from "@/lib/fetch"
export default async function Home({params}:{params:{id:number}}){

const res= await getChapterData(params.id)
const data= res
const mediaUrl = "https://media.flixscans.org/"
return(<main className="w-full h-screen flex flex-col  items-center ">
    <div className="overflow-y-scroll  w-full flex items-center flex-col">
 {data.chapterData.webtoon.map((e,i)=>(

<img key={i} src={mediaUrl+e} alt="chapterImg" className="sm:w-1/2 shadow-lg"/>
))} 
</div>
    </main>)
}