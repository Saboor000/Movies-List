import React, { useContext } from "react";
import { Box, Grid2, List, ListItem, Typography } from "@mui/material";
import { MoviesContext } from "../contexts/MoviesContext";
import MoviesDetails from "./MoviesDetails";
import { ThemeContext } from "../contexts/ThemeContext";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);
  const theme = useContext(ThemeContext);
  const currentTheme = theme.isLightTheme ? theme.light : theme.dark;

  return movies.length ? (
    <Grid2
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
        <Box display="flex" direction="row" sx={{ padding: "20px 100px" }}>
          <List>
            {movies.map((movie) => (
              <ListItem key={movie.id}>
                <MoviesDetails movie={movie} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid2>
    </Grid2>
  ) : (
    <Grid2
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
          sx={{
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              background: currentTheme.ui,
              padding: "5px ",
              borderRadius: "2px",
            }}
          >
            No movies to watch!!
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default MoviesList;
