import React, { useState } from "react";
import styles from "../../styles/AuthForm.module.css";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function SignInForm() {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();
  const { username, password } = signInData;

  const [errors /* setErrors */] = useState({});

  const handleSubmit = async (event) => {
    await login(event, signInData);
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container
      className={`${styles.SiteBackground} d-flex flex-column align-items-center justify-content-center vh-100`}
    >
      <h1 className={`${styles.Header} mb-4`}>Sign In</h1>
      <Form onSubmit={handleSubmit} className={`${styles.Form} w-100`}>
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            className={`${styles.Input} mb-2`}
          />
          {errors.username?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            className={`${styles.Input} mb-2`}
          />
          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
        </Form.Group>
        <Button type="submit" className={`${styles.Button} mb-3`}>
          Sign in
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Link to="/signup" className={styles.Link}>
          Don't have an account? <span>Sign up now!</span>
        </Link>
      </Form>
    </Container>
  );
}

export default SignInForm;
