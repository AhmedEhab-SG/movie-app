import { Grid, Typography, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { getMoviesPage } from "../api/moves";
import MovieCard from "./shared/MovieCard";

const MovieSelect = () => {
  const [movies, setmMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMoviesPage(page)
      .then((res) => {
        setmMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const changePageHandler = (e) => {
    const targetPage = e.target.textContent;
    setPage(targetPage);
  };

  let movieCardElem;

  if (movies.results) {
    movieCardElem = movies.results.map((obj) => {
      return (
        <MovieCard
          key={obj.id}
          id={obj.id}
          img={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
          title={obj.title}
          relesaeDate={obj.release_date}
          description={obj.overview}
          rate={obj.vote_average}
          popularity={obj.popularity}
        />
      );
    });
  }

  return (
    <main style={{ padding: "1rem" }}>
      <Typography
        variant="h5"
        sx={{ marginLeft: "5%  ", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Popular Moives
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
        }}
      >
        {movieCardElem}
      </Grid>
      {movies.total_pages && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
          count={movies.total_pages}
          color="primary"
          showFirstButton
          showLastButton
          onChange={changePageHandler}
          
        />
      )}
    </main>
  );
};

export default MovieSelect;
