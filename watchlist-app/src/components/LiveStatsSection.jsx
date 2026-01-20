export default function LiveStatsSection() {
  return (
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
  );
}
