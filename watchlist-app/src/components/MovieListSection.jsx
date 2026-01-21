import MoveListItem from "./MovieListItem";

export default function MovieListSection({
  movies,
  onToggleWatched,
  onDeleteMovie,
}) {
  return (
    <div>
      {movies.map((movie) => (
        <MoveListItem
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onDeleteMovie={onDeleteMovie}
        ></MoveListItem>
      ))}
    </div>
  );
}
