export default function MoveListItem({
  movie,
  onToggleWatched,
  onDeleteMovie,
}) {
  return (
    <div className="movie-list">
      <div className="movie-list-title">🎬 {movie.title}</div>
      <div className="movie-list-body">
        <div className="movie-list-body-column">
          <div className="movie-list-details">
            <div className="genre">Genre: {movie.genre}</div>
            <div className="status">
              Status: {movie.status ? "Watched" : "Unwatched"}
            </div>
          </div>
        </div>
        <div className="movie-list-body-column">
          <div className="movie-list-buttons">
            <button
              className="toggle-button"
              onClick={() => onToggleWatched(movie.id)}
            >
              {movie.status ? "Mark Unwatched" : "Mark Watched"}
            </button>
            <button
              className="delete-button"
              onClick={() => onDeleteMovie(movie.id)}
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
