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
        genre:d.mainGenres,
        slug:d.slug
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
    url:mediaUrl+data.thumbSize.medium,
    synopsis:data.story,
slug:data.slug,
status:data.status,
mainGenre:data.mainGenres,
genres:data.genres,
author:data.authors[0].name
    }
    //console.log(dataObj)
    return dataObj
}

async function getChapterList(mangaId:string) {
    //var imgUrl:Mg[]=[]
    const url ="https://api.flixscans.org/api/v1/webtoon/chapters/"+mangaId+"-desc"
    const res:ChapterData = await fethManga(url)
  const data= res
    return data
}
async function getChapterData(Id:number) {
    //var imgUrl:Mg[]=[]
    const url ="https://api.flixscans.org/api/v1/webtoon/chapters/chapter/"+Id.toString()

    const res:ChapterResponse = await fethManga(url)
  const data:Chapter= res.chapter
 console.log(url,res,data)
    return data
}
export  {getimgs,getById,getChapterList,getChapterData}