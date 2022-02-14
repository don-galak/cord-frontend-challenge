export type SearchTerm = "popular" | "genres" | "search";
export type SearchQueryFn = (keyword: string | null, year: string | null, genres: string) => string;

export interface QueryMap {
  [index: string]: {
    generateEndpoint?: SearchQueryFn;
    endpoint?: string;
    error: string;
  };
}
