import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../Firebase";
import {
  Alert,
  Button,
  FloatingLabel,
  Form,
  Col,
  InputGroup,
  Row,
} from "react-bootstrap";
import "../css/sign-in.css";
import { BarLoader } from "react-spinners";

function SignUp({ buttonsDisabled, setButtonsDisabled }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Fan");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() !== false) {
      setButtonsDisabled(true);
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(user);
          setDoc(doc(db, "users", user.uid), {
            First: firstName,
            Last: lastName,
            DOB: dateOfBirth,
            Email: email,
            User: userType,
          });
        })
        .then(() => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setError(null);
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
    }
  };

  return (
    <section className="mt-4 mx-5">
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal text-center">Sign Up</h1>

        <Row className="mb-1">
          <Form.Group as={Col} md="4" className="mt-2">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              id="First-Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your first name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" className="mt-2">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              id="Last-Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your last name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" className="mt-2">
            <Form.Label>Date of birth</Form.Label>
            <input
              type="date"
              required
              id="D.O.B"
              className="form-control"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />

            <Form.Control.Feedback type="invalid">
              Please enter your date of birth.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" className="mt-2">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                disabled={buttonsDisabled}
                id="Email address"
              />
              <Form.Control.Feedback type="invalid">
                Please enter an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" className="mt-2">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                disabled={buttonsDisabled}
                id="Password"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" className="mt-2">
            <Form.Label>Which are you?</Form.Label>
            <Form.Select
              id="Account-Type"
              onChange={(e) => setUserType(e.target.value)}
              defaultValue="Fan"
            >
              <option value="Fan">A fan</option>
              <option value="Artist">An Artist</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mt-4 mb-1 px-3" as={Col} md="4">
          <Button
            variant="primary"
            type="submit"
            className="mx-auto py-2 mb-1"
            // onClick={onSubmit}
            disabled={buttonsDisabled}
          >
            Submit
          </Button>
        </Row>

        <Row className="mb-3 px-3" as={Col} md="4">
          {buttonsDisabled === true ? (
            <Button
              variant="outline-primary"
              type="submit"
              className="mx-auto py-2 mb-1"
              disabled={buttonsDisabled}
            >
              Or Login
            </Button>
          ) : (
            <NavLink to="/login" className="mx-auto mb-1 p-0">
              <Button
                variant="outline-primary"
                type="submit"
                className="w-100 py-2 "
              >
                Or Login
              </Button>
            </NavLink>
          )}
        </Row>

        {isLoading === true ? (
          <BarLoader
            color="#0d6efd"
            height={7}
            className="mx-auto my-4"
            id="Loading-Bar"
          />
        ) : null}

        {error === null ? null : (
          <Row className="mt-4 mb-1 px-3" as={Col} md="4">
            <Alert variant="danger" className="text-center mx-auto">
              {error}
            </Alert>{" "}
          </Row>
        )}
      </Form>
    </section>
  );
}

export default SignUp;
