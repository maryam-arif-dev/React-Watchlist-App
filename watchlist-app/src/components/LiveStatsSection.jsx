export default function LiveStatsSection({ total, watched, unwatched }) {
  return (
    <div className="live-stat-section">
      <div className="live-stat-column">
        <span className="live-stat-all"> 🎬 Total: {total}</span>
      </div>
      <div className="live-stat-column">
        <span className="live-stat-watched"> ✅ Watched: {watched}</span>
      </div>
      <div className="live-stat-column">
        <span className="live-stat-unwatched"> ⏳ Unwatched: {unwatched}</span>
      </div>
      <div className="live-stat-column">
        {/* Conditional Rendering 
        if total movies = 0 | total movies = watched movies | total movies > watched */}
        {total == 0 ? (
          <span className="live-stat-span">Add a movie to get started!</span>
        ) : total == watched ? (
          <span className="live-stat-span">You watched everything!</span>
        ) : (
          <span className="live-stat-span">See unwatched movies!</span>
        )}
      </div>
    </div>
  );
}
