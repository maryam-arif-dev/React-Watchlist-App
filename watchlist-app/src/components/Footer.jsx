export default function Footer({ movies }) {
  return (
    <footer className="footer">
      {/* Conditional Rendering
          total movies = 0 | total movies > 0
       */}
      {movies.length == 0 ? (
        <>
          <div className="footer-title">🎬 No movies yet</div>
          <div className="footer-subtitle">
            Add your first movie to the watchlist!
          </div>
        </>
      ) : (
        <>
          <div className="footer-title">🎬 Happy Watching!</div>
          <div className="footer-subtitle">
            Add your favorites movie to the watchlist!
          </div>
        </>
      )}
    </footer>
  );
}
