import { useState } from "react";
import { verifyBeforeUpdateEmail } from "firebase/auth";
import { auth } from "../Firebase";
import { Form, Button, FloatingLabel, Alert, Spinner } from "react-bootstrap";
import { BarLoader } from "react-spinners";
import "../css/sign-in.css";
import { Link } from "react-router-dom";

function UpdateEmailForm({ buttonsDisabled, setButtonsDisabled }) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailResetMessage, setEmailResetMessage] = useState(false);

  const onUpdate = (e) => {
    e.preventDefault();
    setError(null);
    setButtonsDisabled(true);
    setIsLoading(true);
    setEmailResetMessage(false);
    if (auth.currentUser.email !== email) {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("Incorrect email");
    }
    if (email === "") {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("An email is required");
    }
    if (confirmEmail === "") {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("A confirmation email is required");
    }
    if (newEmail === "") {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("A new email is required");
    }
    if (email !== confirmEmail) {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("Emails don't match");
    }
    if (
      auth.currentUser.email === email &&
      email === confirmEmail &&
      email !== "" &&
      newEmail !== ""
    ) {
      verifyBeforeUpdateEmail(auth.currentUser, newEmail)
        .then(() => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setEmailResetMessage(true);
        })
        .catch((error) => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setEmailResetMessage(false);
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
    <section className="mt-4">
      <Form className="small-form w-100 m-auto">
        <h3 className="h3 mb-3 fw-normal text-center">Update Email</h3>

        <FloatingLabel label="Current email address">
          <Form.Control
            type="email"
            placeholder="Current email"
            id="form-top"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            disabled={buttonsDisabled}
          />
        </FloatingLabel>

        <FloatingLabel label="Confirm email">
          <Form.Control
            type="email"
            placeholder="Confirm email"
            id="form-middle"
            className="form-control"
            onChange={(e) => setConfirmEmail(e.target.value)}
            disabled={buttonsDisabled}
          />
        </FloatingLabel>

        <FloatingLabel label="New email address">
          <Form.Control
            type="email"
            placeholder="New email"
            id="form-bottom"
            className="form-control"
            onChange={(e) => setNewEmail(e.target.value)}
            disabled={buttonsDisabled}
          />
        </FloatingLabel>

        <Button
          variant="primary"
          type="submit"
          className="w-100 py-2 my-2"
          onClick={onUpdate}
          disabled={buttonsDisabled}
        >
          Update Email
        </Button>

        {isLoading === true ? (
          <BarLoader
            color="#0d6efd"
            height={7}
            className="mx-auto my-4"
            id="Loading-Bar"
          />
        ) : null}

        {error === null ? null : <Alert variant="danger">{error}</Alert>}

        {emailResetMessage === true ? (
          <Alert variant="success">
            Please verify your new email to update your account, then{" "}
            <Link to="/" className="alert-link link-animation">
              login
            </Link>{" "}
            with your new email address
          </Alert>
        ) : null}
      </Form>
    </section>
  );
  // }
}

export default UpdateEmailForm;
