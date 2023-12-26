async function fethManga(url:string){
   const res= await fetch(url)
   return res.json()
}

async function getimgs(){
    var imgUrl:cardData[]=[]
    const url="https://api.flixscans.org/api/v1/search/advance"
const res:SeriesJSONManhwas = await fethManga(url)
const data = res.data
const mediaUrl = "https://media.flixscans.org/"
data.forEach((d)=>{
    const p:cardData= {
        id:d.id.toString(),
        name:d.title,
        url:mediaUrl + (d.thumbSize.large),
        views:d.totalViews,
        lastChapter:d.lastChapter,
        genre:d.mainGenres
    }
    
    imgUrl.push(p)
})
return imgUrl
}

async function getById(mangaId:string) {
    //var imgUrl:Mg[]=[]
    const url ="https://api.flixscans.org/api/v1/webtoon/series/"+mangaId
    const res:SeriesResponse = await fethManga(url)
  const data= res.serie
  const mediaUrl = "https://media.flixscans.org/"

    const dataObj:infoData ={
    id:data.id,
    name:data.title,
    url:mediaUrl+data.thumbSize.small,
    synopsis:data.story,
slug:data.slug,
status:data.status,
mainGenre:data.mainGenres,
genres:data.genres
    }
    return dataObj
}

async function getChapterList(mangaId:string) {
    //var imgUrl:Mg[]=[]
    const url ="https://api.flixscans.org/api/v1/webtoon/chapters/38"+mangaId+"-desc"
    const res:ChapterData = await fethManga(url)
  const data= res
console.log(data,"vsfffffffffffffffffffffffffffffffffhj")
    return data
}
export  {getimgs,getById,getChapterList}