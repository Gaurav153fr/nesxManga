type cardData={
  id:string,
  name:string|null,
  url:string|null,
  views:number,
  lastChapter:LastChapter,
  genre:string,
}
type infoData={
  id:number,
  name:string|null,
  url:string|null,
  synopsis:string,
  slug:string,
  status:string,
  mainGenre:string,
  genres: { id: number; name: string; slug: string }[]
}

interface ChapterInfo {
  id: number;
  name: string;
  title: string | null;
  slug: string;
  published: boolean;
  views: number;
  thumbnail: string;
  createdAt: string;
}

type ChapterData = ChapterInfo[];


interface ThumbnailSizes {
  small: string;
  medium: string;
  large: string;
  extra: string;
}

interface LastChapter {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
}

interface ChapterInfo {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
}

interface SeriesData {
  id: number;
  title: string;
  slug: string;
  prefix: number;
  thumbnail: string;
  thumbSize: ThumbnailSizes;
  mainGenres: string;
  type: string;
  serieType: string;
  status: string;
  totalViews: number;
  refreshAt: string;
  lastChapter: LastChapter;
  threeChapter: ChapterInfo[];
}

// Type definition for the 'data' array
type SeriesDataArray = SeriesData[];

// Type definition for the entire JSON object
interface SeriesJSONManhwas {
  data: SeriesDataArray;
}

  //manga by id types

  interface TeamInfo {
    id: number;
    name: string;
    slug: string;
    avatar: string;
    avatarSize: {
        small: string;
        medium: string;
        large: string;
        extra: string;
    };
}

interface ChapterInfo {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
}

interface SeriesInfo {
    id: number;
    team: TeamInfo;
    title: string;
    slug: string;
    prefix: number;
    thumbnail: string;
    thumbSize: {
        small: string;
        medium: string;
        large: string;
        extra: string;
    };
    chapterThumbnail: string | null;
    story: string;
    serieType: string;
    mainGenres: string;
    nsfw: boolean;
    commentOpen: boolean;
    otherNames: string[];
    age: string;
    status: string;
    type: string;
    rating: number;
    release: string;
    totalViews: number;
    totalBookmarked: number;
    totalReview: number;
    createdAt: string;
    firstChapter: ChapterInfo;
    lastChapter: ChapterInfo;
    authors: { id: number; name: string; slug: string }[];
    artists: { id: number; name: string; slug: string }[];
    genres: { id: number; name: string; slug: string }[];
    characters: any[]; // Replace 'any' with a specific type if available
}

interface SeriesResponse {
    status: boolean;
    message: string;
    serie: SeriesInfo;
}
