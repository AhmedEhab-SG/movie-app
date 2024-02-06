import { Grid, Box, Typography, Button } from "@mui/material";
import { Favorite } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.favoirte.count);

  const watchListhandler = () => {
    navigate(`/watch-list`);
  };
  const registerHandler = () => {
    navigate(`/register`);
  };

  const navagateHanddler = () => {
    navigate(`/movie-app`);
  };

  return (
    <header>
      <Grid
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          paddingBlock: "0.5rem",
          paddingInline: "1rem",
          background: "gold",
        }}
      >
        <Typography
          variant="body1"
          sx={{ cursor: "pointer", padding: "6px", fontWeight: "bolder" }}
          onClick={navagateHanddler}
        >
          Movie App
        </Typography>
        <Box sx={{ display: "flex", gap: "1.3rem", alignItems: "center" }}>
          <Typography
            sx={{ cursor: "pointer", padding: "6px", fontWeight: "bold" }}
            variant="body1"
          >
            En
          </Typography>
          <Button
            sx={{ fontWeight: "bold", color: "black", textTransform: "none" }}
            onClick={registerHandler}
          >
            Register
          </Button>
          <nav>
            <Button
              sx={{
                position: "relative",
                gap: "0.3em",
                color: "black",
                textTransform: "none",
              }}
              onClick={watchListhandler}
            >
              <Typography
                sx={{
                  color: "#ffff",
                  position: "absolute",
                  left: "18.3px",
                  fontSize: "1.2rem",
                }}
                variant="p"
              >
                {count}
              </Typography>
              <Favorite sx={{ fontSize: "2rem" }} />
              <Typography fontWeight="bold" variant="body1">
                watch list
              </Typography>
            </Button>
          </nav>
        </Box>
      </Grid>
    </header>
  );
};

export default Header;
