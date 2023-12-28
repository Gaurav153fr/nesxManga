import RightSidebar from "@/components/RightSidebar";

export default function Page({params}:{params:{mangaId:string,chapterSlug:string}}){
    return(<div className=" w-100 overflow-y-scroll h-screen">
        <RightSidebar mangaId={params.mangaId} series={params.chapterSlug}/></div>)
}