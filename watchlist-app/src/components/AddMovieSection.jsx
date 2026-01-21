import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
// Creating array list for genre options
const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Animation",
  "Crime",
  "Documentary",
  "Family",
  "Musical",
  "War",
];
export default function AddMovieSection({ onAddMovie }) {
  // useState for form data colliction
  const [value, setValue] = useState("");
  const [genre, setGenre] = useState("Family");
  // useState for data validation error
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);

  // create function to excute when form submited
  function addMovieSubmit() {
    // validate user input
    const cleanValue = value.trim();
    if (!cleanValue) {
      return setError("Movie name is required");
    }
    // passing data from child to parent
    onAddMovie({
      title: cleanValue,
      genre: genre,
      status: status,
    });
    // cleaning the the filds ofter of fatching data
    setError("");
    setValue("");
    setGenre("Family");
    setStatus(false);
  }
  return (
    <div className="add-movie-section">
      <div className="add-movie-section-title">Add Movie</div>
      <div className="add-movie-section-form">
        <TextInput
          value={value}
          onChange={setValue}
          placeholder={"Movie Name..."}
        ></TextInput>
        <SelectInput
          value={genre}
          onChange={setGenre}
          options={GENRES}
        ></SelectInput>
        <div className="add-movie-section-form-column">
          <button className="add-movie-section-button" onClick={addMovieSubmit}>
            Add Movie
          </button>
        </div>
      </div>
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
}
