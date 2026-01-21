export default function FilterSection({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-section">
      <div className="filter-column">
        <button
          className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => onFilterChange("all")}
        >
          🎬 All
        </button>
      </div>
      <div className="filter-column">
        <button
          className={`filter-button ${activeFilter == "watched" ? "active" : ""}`}
          onClick={() => onFilterChange("watched")}
        >
          ✅ Watched
        </button>
      </div>
      <div className="filter-column">
        <button
          className={`filter-button ${activeFilter == "unwatched" ? "active" : ""}`}
          onClick={() => onFilterChange("unwatched")}
        >
          ⏳ Unwatched
        </button>
      </div>
    </div>
  );
}
