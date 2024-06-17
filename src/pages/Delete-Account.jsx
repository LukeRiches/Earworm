import { deleteUser } from "firebase/auth";
import { auth, db } from "../Firebase";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import DeleteAccountModal from "../components/Delete-Account-Modal";

function DeleteAccount({ setButtonsDisabled, user }) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteAccount = (e) => {
    e.preventDefault();
    setError(null);
    setButtonsDisabled(true);
    setIsLoading(true);

    deleteDoc(doc(db, "users", user.uid))
      .then(() => {
        return deleteUser(auth.currentUser);
      })
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

      <DeleteAccountModal
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
