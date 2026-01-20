export default function SelectInput({ value, onChange, options }) {
  return (
    <div className="add-movie-section-form-column">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
        required
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {" "}
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
