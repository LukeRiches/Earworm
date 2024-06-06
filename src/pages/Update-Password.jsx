import { useState } from "react";
import { auth } from "../Firebase";
import { Form, Button, FloatingLabel, Alert, Spinner } from "react-bootstrap";
import { BarLoader } from "react-spinners";
import "../css/sign-in.css";
import { updatePassword } from "firebase/auth";

function UpdatePasswordForm({ buttonsDisabled, setButtonsDisabled }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordResetMessage, setPasswordResetMessage] = useState(false);

  const onUpdate = (e) => {
    e.preventDefault();
    setError(null);
    setButtonsDisabled(true);
    setIsLoading(true);
    setPasswordResetMessage(false);
    if (password === "") {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("A new password is required");
    }
    if (confirmPassword === "") {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("A confirmation password is required");
    }
    if (password !== confirmPassword) {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError("Passwords don't match");
    }
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      updatePassword(auth.currentUser, password)
        .then(() => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setPasswordResetMessage(true);
        })
        .catch((error) => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setPasswordResetMessage(false);

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
        <h3 className="h3 mb-3 fw-normal text-center">Update Password</h3>

        <FloatingLabel label="New Password">
          <Form.Control
            type="password"
            placeholder="New Password"
            id="password-reset-form-top"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            disabled={buttonsDisabled}
          />
        </FloatingLabel>

        <FloatingLabel label="Confirm Password">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            id="password-reset-form-bottom"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Update Password
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

        {passwordResetMessage === true ? (
          <Alert variant="success">Your Password has been updated!</Alert>
        ) : null}
      </Form>
    </section>
  );
  // }
}

export default UpdatePasswordForm;
