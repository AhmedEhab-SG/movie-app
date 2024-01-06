import { Fragment } from "react";
import SearchBar from "../components/SearchBar";
import MovieSelect from "../components/MovieSelect";

const HomePage = () => {
  return (
    <Fragment>
      <SearchBar />
      <MovieSelect />
    </Fragment>
  );
};

export default HomePage;
