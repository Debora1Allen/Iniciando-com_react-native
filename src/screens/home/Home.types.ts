export interface NowPlayingMoviesResponse {
  page: number;
  results: Result[];
  dates: Dates;
  total_pages: number;
  total_results: number;
}

export interface Result {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export enum TABS {
  NOW_PLAYING = 0,
  UPCOMING = 1,
  TOP_RATED = 2,
  POPULAR = 3,
}

export const MOVIES_URL = {
  [TABS.NOW_PLAYING]: "/movie/now_playing",
  [TABS.UPCOMING]: "/movie/upcoming",
  [TABS.TOP_RATED]: "/movie/top_rated",
  [TABS.POPULAR]: "/movie/popular",
};
