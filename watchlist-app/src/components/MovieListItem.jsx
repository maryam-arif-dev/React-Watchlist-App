export default function MoveListItem({ movie }) {
  return (
    <div className="movie-list">
      <div className="movie-list-title">🎬 {movie.title}</div>
      <div className="movie-list-body">
        <div className="movie-list-body-column">
          <div className="movie-list-details">
            <div className="genre">Genre: {movie.genre}</div>
            <div className="status">Status: {movie.status}</div>
          </div>
        </div>
        <div className="movie-list-body-column">
          <div className="movie-list-buttons">
            <button className="toggle-button">Toggle Watched/Unwatched</button>
            <button className="delete-button">🗑</button>
          </div>
        </div>
      </div>
    </div>
  );
}
