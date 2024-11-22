import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { Box, Grid2, IconButton, Typography } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

const NavBar = () => {
  const { movies } = useContext(MoviesContext);
  const theme = useContext(ThemeContext);
  const currentTheme = theme.isLightTheme ? theme.light : theme.dark;

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
          gap={2}
          sx={{
            color: currentTheme.syntax,
            paddingTop: "30px",
            textAlign: "center",
            width: "100%",
            paddingLeft: "70px",
          }}
        >
          <Typography variant="h4" className="navbar-h3">
            Movies List
          </Typography>
          <Typography variant="body1" className="navbar-body1">
            Currently you have {movies.length} movies to watch
          </Typography>
        </Box>

        <Box
          sx={{
            color: currentTheme.syntax,
            padding: 2,
            textAlign: "center",
            width: "10%",
          }}
        >
          <IconButton onClick={theme.toggleTheme}>
            {theme.isLightTheme ? (
              <DarkMode />
            ) : (
              <LightMode sx={{ color: "white" }} />
            )}
          </IconButton>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default NavBar;
