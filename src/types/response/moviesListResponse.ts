export interface MoviesListResponse {
  page: number;
  results: MoviesDataContent[];
  total_results: number;
  total_pages: number;
}

export interface MoviesDataContent {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  id: number;
  original_title: string;
  title: string;
  popularity: number;
}
