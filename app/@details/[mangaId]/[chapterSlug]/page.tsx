import RightSidebar from "@/components/RightSidebar";

export default function Page({params}:{params:{mangaId:string,chapterSlug:string}}){
    return(<div className=" w-full no-scrollbar">
        <RightSidebar mangaId={params.mangaId} series={params.chapterSlug}/></div>)
}