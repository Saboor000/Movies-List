import React, { useContext, useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import { MoviesContext } from "../contexts/MoviesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import DeleteIcon from "@mui/icons-material/Delete";

const MoviesDetails = ({ movie }) => {
  const { removeMovies } = useContext(MoviesContext);
  const theme = useContext(ThemeContext);
  const currentTheme = theme.isLightTheme ? theme.light : theme.dark;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    removeMovies(movie.id);
    setDialogOpen(false);
  };

  return (
    <Box
      className="movies-details"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: currentTheme.ui,
        width: "500px",
        borderRadius: "5px",
        boxShadow: "0px 2px 5px 0px black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 30px",
        }}
      >
        <ListItemText
          primary={
            <>
              <Typography component="span" sx={{ fontWeight: 600 }}>
                Title:
              </Typography>
              {` ${movie.title}`}
            </>
          }
        />
        <ListItemText
          primary={
            <>
              <Typography component="span" sx={{ fontWeight: 600 }}>
                Genre:
              </Typography>
              {` ${movie.genre}`}
            </>
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0px 30px",
        }}
      >
        <DeleteIcon onClick={handleDeleteClick} sx={{ cursor: "pointer" }} />
      </Box>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this movie?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MoviesDetails;
