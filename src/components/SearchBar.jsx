import { Grid, Typography, Button, Container } from "@mui/material";
import styles from "../styles/searchBar.module.css";
import { useEffect, useRef, useState } from "react";
import { getSearchMovie } from "../api/moves";

const SearchBar = () => {
  const [searchedMovie, setSearchedMovie] = useState();
  const serachRef = useRef();

  // useEffect(() => {
  //   getSearchMovie(searchedMovie)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, [searchedMovie]);

  const searchHandler = () => {
    const movieName = serachRef.current.value;
    setSearchedMovie(movieName);
  };

  return (
    <Container
      sx={{ background: "#f2f2f2", marginBlock: "2rem", padding: "2rem" }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", marginBottom: "1.5rem" }}
      >
        Welcome to our movie app
      </Typography>
      <Typography variant="p">
        Millions of movies, TV shows and people discover. Explore Now
      </Typography>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        <input
          placeholder="Search and Explore"
          className={styles.searchInput}
          ref={serachRef}
        />
        <Button
          sx={{
            bgcolor: "gold",
            textTransform: "none",
            paddingInline: "1.5rem",
            color: "black",
            "&:hover": {
              bgcolor: "orange",
            },
          }}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Grid>
    </Container>
  );
};

export default SearchBar;
