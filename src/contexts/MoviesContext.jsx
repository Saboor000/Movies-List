import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  // Initialize state from local storage or set default values
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies
      ? JSON.parse(savedMovies)
      : [
          {
            title: "Kodachrome",
            id: 1,
            genre: "Comedy,Drama",
          },
          {
            title: "Into the Wild",
            id: 2,
            genre: "Adventure, action, teen, drama",
          },
        ];
  });

  // Update local storage whenever movies state changes
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  // Function to add movies
  const addMovies = (title, genre) => {
    setMovies([...movies, { title, genre, id: uuidv4() }]);
  };

  // Function to remove movies
  const removeMovies = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovies, removeMovies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
