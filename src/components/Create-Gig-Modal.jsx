import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BarLoader } from "react-spinners";
import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

function CreateGigModal({
  user,
  show,
  onHide,
  buttonsDisabled,
  setButtonsDisabled,
}) {
  const [gigTitle, setGigTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [description, setDescription] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [eighteenPlus, seteighteenPlus] = useState(false);
  const [price, setPrice] = useState(0);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

      setDoc(doc(db, "gigs", gigTitle), {
        creator: user.uid,
        title: gigTitle,
        artist: artist,
        description: description,
        start: start,
        finish: finish,
        venueName: venueName,
        venueAddress: venueAddress,
        capacity: capacity,
        eighteenPlus: eighteenPlus,
        price: price,
        attendees: 0,
      })
        .then(() => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setError(null);
          window.location.href = "http://localhost:5173/";
        })
        .catch((error) => {
          // console.log(error);
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
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Create Gig</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Row className="mb-1">
            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Gig Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Gig Title"
                id="First-Name"
                onChange={(e) => setGigTitle(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your event title.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Artist</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Artist"
                id="Artist"
                onChange={(e) => setArtist(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter an Artist.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Ticket Price</Form.Label>

              <InputGroup hasValidation>
                <InputGroup.Text>£</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Ticket Price"
                  required
                  onChange={(e) => setPrice(Number(e.target.value))}
                  disabled={buttonsDisabled}
                  id="Ticket Price"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the events ticket price.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-1">
            <Form.Group className="mt-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Description"
                id="Description"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Form.Control.Feedback type="invalid">
                Please enter your events description.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-1">
            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Venue Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Venue Name"
                  required
                  onChange={(e) => setVenueName(e.target.value)}
                  disabled={buttonsDisabled}
                  id="Venue name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a venue name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Venue Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Venue Address"
                  required
                  onChange={(e) => setVenueAddress(e.target.value)}
                  disabled={buttonsDisabled}
                  id="Venue address"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a venue address.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Venue Capacity</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  placeholder="Venue Capacity"
                  required
                  onChange={(e) => setCapacity(e.target.value)}
                  disabled={buttonsDisabled}
                  id="Venue Capacity"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the venue's capacity.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-1">
            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Start</Form.Label>
              <input
                type="datetime-local"
                required
                id="Gig Start"
                className="form-control"
                onChange={(e) => setStart(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a starting date and time for your event.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>Finish</Form.Label>
              <input
                type="datetime-local"
                required
                id="Gig Finish"
                className="form-control"
                onChange={(e) => setFinish(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a finishing date and time for your event.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mt-2">
              <Form.Label>18+?</Form.Label>
              <Form.Select
                id="Eighteen Plus Gig"
                onChange={(e) => seteighteenPlus(e.target.value)}
                defaultValue="No"
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} disabled={buttonsDisabled} variant="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} disabled={buttonsDisabled} variant="success">
          Publish Gig
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

export default CreateGigModal;
