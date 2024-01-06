import { Container } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    user: "",
    email: "",
    password: 0,
  });

  const [error, setError] = useState({
    user: null,
    email: null,
    password: null,
  });

  const handleInputChange = (e) => {
    const field_name = e.target.name;
    const field_value = e.target.value;
    console.log(field_name);
    if (field_name === "user_name") {
      setRegisterForm((preState) => ({
        ...preState,
        user: field_name,
      }));

      setError((preState) => ({
        ...preState,
        user:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Min.length is 3"
            : null,
      }));
    }

    if (field_name === "email") {
      setRegisterForm((preState) => ({
        ...preState,
        email: field_value,
      }));

      setError((preState) => ({
        ...preState,
        email:
          field_value.length === 0
            ? "This field is required"
            : !field_value.includes("@")
            ? "Email must inculdes @"
            : null,
      }));
    }

    if (field_name === "password") {
      setRegisterForm((preState) => ({
        ...preState,
        password: field_value,
      }));
      setError((preState) => ({
        ...preState,
        password:
          Number(field_value) < 3 ? "Password should be greater than 3" : null,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          boxShadow: "10px 5px 5px gray",
          padding: "3rem",
          borderRadius: "30px",
        }}
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${error.user ? "border-danger" : ""}`}
            id="user_name"
            name="user_name"
            aria-describedby="user_name_help"
            onChange={handleInputChange}
          />
          {error.user && (
            <div id="user_name_help" className="form-text text-danger">
              {error.user}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${error.email ? "border-danger" : ""}`}
            id="email_description"
            name="email"
            onChange={handleInputChange}
          />
          {error.email && (
            <div id="email_description" className="form-text text-danger">
              {error.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${error.password ? "border-danger" : ""}`}
            id="password"
            aria-describedby="price_help"
            name="password"
            onChange={handleInputChange}
          />
          {error.password && (
            <div id="password" className="form-text text-danger">
              {error.password}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Register;
