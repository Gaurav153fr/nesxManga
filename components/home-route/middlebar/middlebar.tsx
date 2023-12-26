import { getimgs } from "@/lib/fetch"
import ContainerCard from "@/components/container-card"
export default async function MiddleBar() {
  const data= await getimgs()
  return (
    <section className="px-2 h-screen overflow-y-scroll no-scrollbar w-full">
    <h3 className=" font-extrabold my-4 text-orange-600 text-lg">Popular:</h3>

<ul className="grid  sm:grid-cols-3 grid-cols-2 md:grid-cols-4  gap-4 ">

{data.map((e)=>(
  <li key={e.id}>
  <ContainerCard id={e.id} name={e.name} url={e.url} genre={e.genre} views={e.views} lastChapter={e.lastChapter}/></li>))}
  
</ul>
    </section>
  )
}
