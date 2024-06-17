import { Alert, Button, Modal } from "react-bootstrap";
import { BarLoader } from "react-spinners";

function DeleteAccountModal({ show, onHide, deleteAccount, isLoading, error }) {
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

export default DeleteAccountModal;
