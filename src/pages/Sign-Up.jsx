import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import "../css/sign-in.css";
import { BarLoader } from "react-spinners";

function SignUp({ buttonsDisabled, setButtonsDisabled }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setButtonsDisabled(true);
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setButtonsDisabled(false);
        setIsLoading(false);
        setError(null);
        const user = userCredential.user;
        sendEmailVerification(user);
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

  return (
    <section className="mt-4">
      <Form className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center">Sign Up</h1>

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
          onClick={onSubmit}
          disabled={buttonsDisabled}
        >
          Submit
        </Button>

        {buttonsDisabled === true ? (
          <Button
            variant="outline-primary"
            type="submit"
            className="w-100 py-2 my-1"
            disabled={buttonsDisabled}
          >
            Or Login
          </Button>
        ) : (
          <NavLink to="/login">
            <Button
              variant="outline-primary"
              type="submit"
              className="w-100 py-2 my-1"
            >
              Or Login
            </Button>
          </NavLink>
        )}

        {isLoading === true ? (
          <BarLoader
            color="#0d6efd"
            height={7}
            className="mx-auto my-4"
            id="Loading-Bar"
          />
        ) : null}

        {error === null ? null : <Alert variant="danger">{error}</Alert>}
      </Form>
    </section>
  );
}

export default SignUp;
