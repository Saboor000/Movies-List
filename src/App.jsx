import React, { useContext } from "react";
import MoviesContextProvider from "./contexts/MoviesContext";
import NavBar from "./components/NavBar";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import MoviesList from "./components/MoviesList";
import MoviesForm from "./components/MoviesForm";

function App() {
  return (
    <div>
      <MoviesContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <MoviesList />
          <MoviesForm />
        </ThemeContextProvider>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
