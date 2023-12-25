async function fethManga(url:string){
   const res= await fetch(url)
   return res.json()
}
type Mg={
    id:string,
    name:string|null,
    url:string|null,
}
async function getimgs(){
    var imgUrl:Mg[]=[]
    const url="https://api.jikan.moe/v4/top/manga"
const data:MangaResponse = await fethManga(url)
const imgs = data.data
imgs.forEach((img)=>{
    const p:Mg= {
        id:img.mal_id.toString(),
        name:img.title,
        url:img.images.webp.image_url
    }
    imgUrl.push(p)
})
return imgUrl
}

async function getById(mangaId:string) {
    //var imgUrl:Mg[]=[]
    const url ="https://api.jikan.moe/v4/manga/"+mangaId
    const res:MangaDataResponse = await fethManga(url)
  const data= res.data
    const dataObj:sideBarData ={
        id:data.mal_id.toString(),
    name:data.title,
    url:data.images.webp.image_url,
    synopsis:data.synopsis,
    }
    return dataObj
}
export  {getimgs,getById}