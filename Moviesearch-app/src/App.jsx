import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8a0ef1bc";

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, SetSearchTerm] = useState("");

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("Batman");
  }, []);

  return (
    <>
    <div className="app">
      <h1>MovieSpace</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => SetSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt="search" onClick={() => SearchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
          </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
    </>
  )
}

export default App