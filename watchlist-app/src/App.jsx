import { useState } from "react";
import "./App.css";
import AddMovieSection from "./components/AddMovieSection";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LiveStatsSection from "./components/LiveStatsSection";
import MovieListSection from "./components/MovieListSection";
// Create unique ID for each movie
function createID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
}
function App() {
  // Create data object with useState
  const [movies, setMovies] = useState([
    {
      id: createID(),
      title: "Inception",
      genre: "Sci-Fi, Thriller",
      status: true,
    },
    {
      id: createID(),
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      status: false,
    },
  ]);
  // getting from form and pass to list
  function handleAddMovie(data) {
    const newMovie = { id: createID(), ...data };
    setMovies((previous) => [newMovie, ...previous]);
  }
  // Mark a movie from list to watchd or unwatched
  const toggleWatched = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, status: !movie.status } : movie,
      ),
    );
  };
  // Delete a movie from list
  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="page">
      {/* Header Section */}
      <Header></Header>
      {/* Add Movie Section */}
      <AddMovieSection onAddMovie={handleAddMovie}></AddMovieSection>
      {/* Live Stats Section */}
      <LiveStatsSection></LiveStatsSection>
      {/* Filter Section */}
      <FilterSection></FilterSection>
      {/* Movie List Card Section */}
      <MovieListSection
        movies={movies}
        onToggleWatched={toggleWatched}
        onDeleteMovie={deleteMovie}
      ></MovieListSection>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
