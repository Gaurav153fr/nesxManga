import RightSidebar from "@/components/RightSidebar";

export default function Details({
    params,
  }: {
    params: { name: string;mangaId:string};
  } ) {
  return (
    <div className=" w-100 h-screen   bg-[#1e1f22] overflow-y-scroll ">
      <RightSidebar mangaId={params.mangaId} series={params.name}/>
    </div>
  )
}
