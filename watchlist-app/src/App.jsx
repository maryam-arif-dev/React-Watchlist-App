import "./App.css";
import AddMovieSection from "./components/AddMovieSection";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LiveStatsSection from "./components/LiveStatsSection";
import MovieListSection from "./components/MovieListSection";

function App() {
  return (
    <div className="page">
      {/* Header Section */}
      <Header></Header>
      {/* Add Movie Section */}
      <AddMovieSection></AddMovieSection>
      {/* Live Stats Section */}
      <LiveStatsSection></LiveStatsSection>
      {/* Filter Section */}
      <FilterSection></FilterSection>
      {/* Movie List Card Section */}
      <MovieListSection></MovieListSection>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
