import { Movie } from "./MovieList";

export interface MovieItemProps {
  movie: Movie;
  genres: { id: number; name: string }[];
}
