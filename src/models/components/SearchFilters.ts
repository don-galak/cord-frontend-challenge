export interface SearchFiltersProps {
  genres: any;
  ratings: any;
  languages: any;
  searchMovies: (keyword: string | null, year: string | null) => void;
}
