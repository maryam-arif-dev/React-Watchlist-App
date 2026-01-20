export default function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="add-movie-section-form-column">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="input"
        required
      />
    </div>
  );
}
