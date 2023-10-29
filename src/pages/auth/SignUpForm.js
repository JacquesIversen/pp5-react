import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import styles from "../../styles/AuthForm.module.css";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
      console.log("From error signup");
    }
  };

  return (
    <Container
      className={`${styles.SiteBackground} d-flex flex-column align-items-center justify-content-center vh-100`}
    >
      <h1 className={`${styles.Header} mb-4`}>Sign Up</h1>

      <Form onSubmit={handleSubmit} className={`${styles.Form} w-100`}>
        <Form.Group controlId="username">
          <Form.Label className="d-none">username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            className={`${styles.Input} mb-2`}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password1">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
            className={`${styles.Input} mb-2`}
          />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password2">
          <Form.Label className="d-none">Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleChange}
            className={`${styles.Input} mb-2`}
          />
        </Form.Group>
        {errors.password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Button type="submit" className={`${styles.Button} mb-3`}>
          Sign up
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
        <Link to="/signin" className={styles.Link}>
          Already have an account? <span>Sign in</span>
        </Link>
      </Form>
    </Container>
  );
};

export default SignUpForm;
