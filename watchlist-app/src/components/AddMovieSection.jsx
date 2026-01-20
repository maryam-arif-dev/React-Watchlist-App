export default function AddMovieSection() {
  return (
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
  );
}
