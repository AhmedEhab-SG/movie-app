import { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieDetailsCard from "../components/shared/MovieDetailsCard";
import { Typography, Container } from "@mui/material";
const WatchList = () => {
  const fav = useSelector((state) => state.favoirte.movieListId);

  const favEmelents = fav.map((obj) => {
    return (
      <MovieDetailsCard
        imageUrl={`https://image.tmdb.org/t/p/w500/${obj.img}`}
        title={obj.title}
        date={obj.releaseDate}
        description={obj.description}
        rate={obj.rate}
        popularity={obj.popularity}
      />
    );
  });

  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ marginLeft: "5%", marginTop:"3rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Watch List
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {favEmelents}
      </div>
    </Container>
  );
};

export default WatchList;
