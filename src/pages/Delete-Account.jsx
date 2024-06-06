import { deleteUser } from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

function MyVerticallyCenteredModal({
  show,
  onHide,
  deleteAccount,
  isLoading,
  error,
}) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete your account?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="secondary">
          Cancel
        </Button>
        <Button onClick={deleteAccount} variant="danger">
          Yes, Delete it
        </Button>
      </Modal.Footer>
      {isLoading === true ? (
        <BarLoader
          color="#dc3545"
          height={7}
          className="mx-auto my-4"
          id="Loading-Bar"
        />
      ) : null}

      {error === null ? null : (
        <Alert variant="danger" className="w-50 m-auto mb-2 text-center">
          {error}{" "}
        </Alert>
      )}
    </Modal>
  );
}

function DeleteAccount({ setButtonsDisabled }) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteAccount = (e) => {
    e.preventDefault();
    setError(null);
    setButtonsDisabled(true);
    setIsLoading(true);

    deleteUser(auth.currentUser)
      .then(() => {
        setButtonsDisabled(false);
        setIsLoading(false);
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
    <section className="text-center">
      <Alert
        variant="danger"
        className="px-4 py-3 mx-3 my-3 text-center"
        id="delete-account-box"
      >
        <h3 className="fs-4">Delete Account</h3>
        <div className=" mx-auto">
          <p className="lead mb-4">
            Warning: If you delete your account there is no restoring it and you
            will have to create a new one
          </p>
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Delete account
          </Button>
        </div>
      </Alert>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        deleteAccount={deleteAccount}
        error={error}
        isLoading={isLoading}
      />
    </section>
  );
}

export default DeleteAccount;
