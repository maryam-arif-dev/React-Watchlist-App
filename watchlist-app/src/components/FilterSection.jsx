export default function FilterSection() {
  return (
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
  );
}
