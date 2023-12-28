import { getimgs } from "@/lib/fetch";
import ContainerCard from "@/components/container-card";
export default async function MiddleBar() {
  let data = null;

  try {
    data = await getimgs();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <section className=" h-screen overflow-y-scroll no-scrollbar w-full px-5 ">
      <h3 className="font-extrabold my-4 mt-20 text-5xl">Hello User 👋</h3>
      <h3 className="font-extrabold my-4  text-xl">Today in popular</h3>

      <ul className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-4 gap-y-1">
        {data ? (
          data.map((e) => (
            <li key={e.id}>
              <ContainerCard
                id={e.id as string}
                name={e.name as string}
                url={e.url as string}
                genre={e.genre}
                views={e.views}
                lastChapter={e.lastChapter}
                slug={e.slug}
              />
            </li>
          ))
        ) : (
          <p>Failed to load</p>
        )}
      </ul>
    </section>
  );
}
