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
    </div>
  );
}
