import { useState } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/sign-in.css";
import { Form, Button, FloatingLabel, Alert, Spinner } from "react-bootstrap";
import { BarLoader } from "react-spinners";

function Login({ buttonsDisabled, setButtonsDisabled }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordResetMessage, setPasswordResetMessage] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    setButtonsDisabled(true);
    setIsLoading(true);
    setPasswordResetMessage(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setButtonsDisabled(false);
        setIsLoading(false);
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        setButtonsDisabled(false);
        setIsLoading(false);
        if (error.message.includes("Error") === false) {
          const end = error.message.indexOf(".");
          setError(error.message.slice(10, end));
        } else {
          setError(
            error.code.charAt(5).toUpperCase() +
              error.code.slice(6).split("-").join(" ")
          );
        }
      });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    setButtonsDisabled(true);
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setButtonsDisabled(false);
        setIsLoading(false);
        setError(null);
        setPasswordResetMessage(true);
      })
      .catch((error) => {
        setButtonsDisabled(false);
        setIsLoading(false);
        if (error.message.includes("Error") === false) {
          const end = error.message.indexOf(".");
          setError(error.message.slice(10, end));
        } else {
          setError(
            error.code.charAt(5).toUpperCase() +
              error.code.slice(6).split("-").join(" ")
          );
        }
      });
  };

  return (
    <section className="mt-4">
      <Form className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center">Login</h1>

        <FloatingLabel controlId="floatingInput" label="Email address">
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            disabled={buttonsDisabled}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            disabled={buttonsDisabled}
          />
        </FloatingLabel>

        <Button
          variant="primary"
          type="submit"
          className="w-100 py-2 mb-1"
          onClick={onLogin}
          disabled={buttonsDisabled}
        >
          Login
        </Button>

        {buttonsDisabled === true ? (
          <Button
            variant="outline-primary"
            type="submit"
            className="w-100 py-2 my-1"
            disabled={buttonsDisabled}
          >
            Or Sign Up
          </Button>
        ) : (
          <NavLink to="/signup">
            <Button
              variant="outline-primary"
              type="submit"
              className="w-100 py-2 my-1"
            >
              Or Sign Up
            </Button>
          </NavLink>
        )}

        <a
          onClick={resetPassword}
          className=" py-2 d-flex justify-content-center link-offset-1 "
        >
          Reset Password
        </a>

        {isLoading === true ? (
          <BarLoader
            color="#0d6efd"
            height={7}
            className="mx-auto my-4"
            id="Loading-Bar"
          />
        ) : null}

        {error === null ? null : <Alert variant="danger">{error}</Alert>}

        {passwordResetMessage === true ? (
          <Alert variant="success">
            Your password reset email has been sent!
          </Alert>
        ) : null}
      </Form>
    </section>
  );
  // }
}

export default Login;
