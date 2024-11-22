import React, { useContext, useState } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { Grid2, Box, Button, TextField } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";

const MoviesForm = () => {
  const { addMovies } = useContext(MoviesContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const theme = useContext(ThemeContext);
  const currentTheme = theme.isLightTheme ? theme.light : theme.dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre) {
      console.log(title, genre);
      addMovies(title, genre);
      setTitle("");
      setGenre("");
    }
  };

  return (
    <Grid2
      spacing={2}
      className="grid-container"
      container
      display="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", boxShadow: "0px 2px 10px 0px black" }}
    >
      <Grid2
        item="true"
        size={{ xs: 6 }}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: currentTheme.bg,
          color: currentTheme.syntax,
          width: "100%",
        }}
      >
        <Box
          className="movies-form"
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: currentTheme.bg,
            color: currentTheme.syntax,
            paddingBottom: "30px",
          }}
        >
          <TextField
            type="text"
            placeholder="Movie title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: currentTheme.ui,
                color: currentTheme.syntax, // To apply on the root of outlined input
              },
              "& input::placeholder": {
                color: currentTheme.syntax,
                // Change placeholder text color
              },
            }}
          />
          <TextField
            type="text"
            placeholder="Movie genre"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            sx={{
              "& input::placeholder": {
                color: currentTheme.syntax, // Change placeholder text color
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: currentTheme.ui,
                color: currentTheme.syntax, // To apply on the root of outlined input
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 0px",
            }}
          >
            <Button
              type="submit"
              sx={{
                backgroundColor: currentTheme.ui,
                color: currentTheme.syntax,
                padding: "5px 20px",
                borderRadius: "4px",
              }}
            >
              Add Movie
            </Button>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default MoviesForm;
