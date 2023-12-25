interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  }
  
  interface ImageUrls {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  }
  
  interface TitleInfo {
    type: string;
    title: string;
  }
  
  interface PublishedInfo {
    from: string;
    to: string | null;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string;
  }
  
  interface AuthorInfo {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface SerializationInfo {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface GenreInfo {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface MangaData {
    mal_id: number;
    url: string;
    images: {
      jpg: ImageUrls;
      webp: ImageUrls;
    };
    approved: boolean;
    titles: TitleInfo[];
    title: string;
    title_english: string | null;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    chapters: number | null;
    volumes: number | null;
    status: string;
    publishing: boolean;
    published: PublishedInfo;
    score: number;
    scored: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: AuthorInfo[];
    serializations: SerializationInfo[];
    genres: GenreInfo[];
    explicit_genres: any[]; // You can replace 'any' with a specific type if available
    themes: GenreInfo[];
    demographics: GenreInfo[];
  }
  
  type MangaResponse = {
    pagination: Pagination;
    data: MangaData[];
  }
  

  //manga by id types

  interface ImageUrlsData {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  }
  
  interface TitleInfoData {
    type: string;
    title: string;
  }
  
  interface PublishedInfoData {
    from: string;
    to: string | null;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string;
  }
  
  interface AuthorInfoData {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface SerializationInfoData {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface GenreInfoData {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface ThemeInfoData {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface DemographicInfoData {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface MangaInfoData {
    mal_id: number;
    url: string;
    images: ImageUrlsData;
    approved: boolean;
    titles: TitleInfoData[];
    title: string;
    title_english: string | null;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    chapters: number | null;
    volumes: number | null;
    status: string;
    publishing: boolean;
    published: PublishedInfoData;
    score: number;
    scored: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: AuthorInfoData[];
    serializations: SerializationInfoData[];
    genres: GenreInfoData[];
    explicit_genres: any[]; // Define the type for explicit genres according to actual data structure
    themes: ThemeInfoData[];
    demographics: DemographicInfoData[];
  }
  
  type MangaDataResponse = {
    data: MangaInfoData;
  }
  
  //right side bar data type
  
type sideBarData={
  id:string,
  name:string|null,
  url:string|null,
  synopsis:string,
}