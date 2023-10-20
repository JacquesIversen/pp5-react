import React, { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from "react-router-dom";

function SignInForm() {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { login, currentUser } = useAuth();
  const { username, password } = signInData;

  const [errors /* setErrors */] = useState({});

  const history = useHistory();

  const handleSubmit = async (event) => {
    await login(event, signInData);
    console.log(currentUser);
    history.push("/");
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">Sign In</h1>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            className="mb-2"
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
            className="mb-2"
          />
          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
        </Form.Group>
        <Button type="submit" className="mb-3">
          Sign in
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
      </Form>
      <Link to="/signup">
        Don't have an account? <span>Sign up now!</span>
      </Link>
    </Container>
  );
}

export default SignInForm;
