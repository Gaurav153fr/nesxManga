import RightSidebar from "@/components/RightSidebar";

export default function Details({
    params,
  }: {
    params: { name: string;mangaId:string};
  } ) {
  return (
    <div className="w-full  sm:h-full h-1/2 bg-[#1e1f22] sm:relative fixed sm:right-0 bottom-0"><RightSidebar mangaId={params.mangaId}/></div>
  )
}
