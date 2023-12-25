import { getimgs } from "@/lib/fetch"

export default async function Home() {
  const data= await getimgs()
  return (
    <main className="w-0">
     
    </main>
  )
}
