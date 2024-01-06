import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../../stores/slices/favorite";
import { useState } from "react";

const MovieCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addFavoriteHandler = () => {
    dispatch(addMovie(props));
    setIsFavorite((preState) => !preState);
  };

  const removeFavoriteHandler = () => {
    dispatch(removeMovie(props));
    setIsFavorite((preState) => !preState);
  };

  const navagateHanddler = (e) => {
    if (e.target.tagName === "svg" || e.target.tagName === "path") return;
    navigate(`/movie-details/${props.id}`);
  };

  return (
    <Grid onClick={navagateHanddler} sx={{ width: "200px", cursor: "pointer" }}>
      <Box sx={{ position: "relative" }}>
        <img
          src={props.img}
          alt="img"
          style={{ width: "100%", borderRadius: "20px" }}
        />
        {isFavorite ? (
          <FavoriteIcon
            sx={{
              position: "absolute",
              color: "#fff",
              top: "10px",
              right: "10px",
            }}
            onClick={removeFavoriteHandler}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{
              position: "absolute",
              color: "#fff",
              top: "10px",
              right: "10px",
            }}
            onClick={addFavoriteHandler}
          />
        )}
      </Box>
      <Typography
        sx={{ fontSize: "15px", fontWeight: "bold", marginTop: "0.3rem" }}
      >
        {props.title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "14px", color: "gray" }}>
        {props.relesaeDate}
      </Typography>
    </Grid>
  );
};

export default MovieCard;
