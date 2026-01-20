import "./App.css";

function App() {
  return (
    <div className="page">
      {/* Header Section */}
      <header className="header">
        <div className="header-title">🎬 My Watchlist</div>
        <div className="header-subtitle">Track movies you want to watch</div>
      </header>
      {/* Add Movie Section */}
      <div className="add-movie-section">
        <div className="add-movie-section-title">Add Movie</div>
        <div className="add-movie-section-form">
          <div className="add-movie-section-form-column">
            <input type="text" placeholder="Title" className="input" required />
          </div>
          <div className="add-movie-section-form-column">
            <select className="input" required>
              <option value="">Select a genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Musical">Musical</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
            </select>
          </div>
          <div className="add-movie-section-form-column">
            <button className="add-movie-section-button">Add Movie</button>
          </div>
        </div>
      </div>
      {/* Live Stats Section */}
      <div className="live-stat-section">
        <div className="live-stat-column">
          <span className="live-stat-all"> 🎬 Total: 10</span>
        </div>
        <div className="live-stat-column">
          <span className="live-stat-watched"> ✅ Watched: 04</span>
        </div>
        <div className="live-stat-column">
          <span className="live-stat-unwatched"> ⏳ Unwatched: 06</span>
        </div>
      </div>
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-column">
          <button className="filter-button">All</button>
        </div>
        <div className="filter-column">
          <button className="filter-button">Watched</button>
        </div>
        <div className="filter-column">
          <button className="filter-button">Unwatched</button>
        </div>
      </div>
      {/* Movie List Card Section */}
      <div className="movie-list">
        <div className="movie-list-title">🎬 Inception</div>
        <div className="movie-list-body">
          <div className="movie-list-body-column">
            <div className="movie-list-details">
              <div className="genre">Genre: Action</div>
              <div className="status">Status: Watched</div>
            </div>
          </div>
          <div className="movie-list-body-column">
            <div className="movie-list-buttons">
              <button className="toggle-button">
                Toggle Watched/Unwatched
              </button>
              <button className="delete-button">🗑</button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-title">🎬 No movies yet</div>
        <div className="footer-subtitle">
          Add your first movie to the watchlist!
        </div>
      </footer>
    </div>
  );
}

export default App;
