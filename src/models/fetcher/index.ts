export type SearchTerm = "popular" | "genres" | "search";
export type SearchQueryFn = (keyword: string, year: number | null) => string;

export interface QueryMap {
  [index: string]: {
    generateEndpoint?: SearchQueryFn;
    endpoint?: string;
    error: string;
  };
}
