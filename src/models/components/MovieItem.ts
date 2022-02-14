import { Option } from "../common/option";
import { Movie } from "./MovieList";

export interface MovieItemProps {
  movie: Movie;
  genres: Option[];
}
