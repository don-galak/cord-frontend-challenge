export interface SearchFiltersProps {
  genres: any;
  ratings: any;
  languages: any;
  searchMovies: (keyword: string, year: number | null) => void;
}
