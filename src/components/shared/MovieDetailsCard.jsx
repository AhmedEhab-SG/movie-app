import { Col } from "react-bootstrap";
import { Rating, Container, Box, Typography } from "@mui/material";
import styles from "../../styles/movieDetailsCard.module.css";

const MovieDetailsCard = (props) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          padding: "2rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "20px",
        }}
      >
        <Box sx={{ width: "15rem", borderRadius: "15px" }}>
          <img
            src={props.imageUrl}
            alt={props.title}
            className={styles.imgMovie}
          />
        </Box>
        <Col
          xs={12}
          sm={6}
          md={8}
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {props.date}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {props.rate && (
              <Rating defaultValue={props.rate/2} precision={0.2} readOnly />
            )}
            <span style={{ fontWeight: "bold" }}>{props.popularity}</span>
          </Box>
          <p className="desc-card">{props.description}</p>
        </Col>
      </Box>
    </Container>
  );
};
export default MovieDetailsCard;
