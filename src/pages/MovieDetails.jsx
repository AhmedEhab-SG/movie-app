import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/moves";
import MovieDetailsCard from "../components/shared/MovieDetailsCard";
import { Container } from "@mui/material";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovieDetails(params.id)
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <Container>
      <h2 style={{ marginBlock: "3rem" }}>Movie Details</h2>
      {movieDetails && (
        <MovieDetailsCard
          imageUrl={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          title={movieDetails.title}
          date={movieDetails.release_date}
          description={movieDetails.overview}
          rate={movieDetails.vote_average}
          popularity={movieDetails.popularity}
        />
      )}
    </Container>
  );
};

export default MovieDetails;
