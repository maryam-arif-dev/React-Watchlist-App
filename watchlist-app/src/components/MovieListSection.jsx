import MoveListItem from "./MovieListItem";

export default function MovieListSection({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MoveListItem key={movie.id} movie={movie}></MoveListItem>
      ))}
    </div>
  );
}
