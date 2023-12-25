import { getimgs } from "@/lib/fetch"
import ContainerCard from "@/components/container-card"
export default async function MiddleBar() {
  const data= await getimgs()
  return (
    <section className=" ml-6 mr-5 h-screen overflow-y-scroll no-scrollbar">
    <h3 className=" font-extrabold my-4 text-orange-600 text-lg">Popular:</h3>

<ul className="grid  sm:grid-cols-3 grid-cols-2 md:grid-cols-4 sm:gap-8 gap-4 ">

{data.map((e)=>(
  <li key={e.id}>
  <ContainerCard id={e.id} name={e.name} imgUrl={e.url}/></li>))}
  
</ul>
    </section>
  )
}
