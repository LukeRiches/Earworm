import { useState } from "react";
import {
  Alert,
  AlertHeading,
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BarLoader } from "react-spinners";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function PurchaseGigModal({
  user,
  show,
  onHide,
  buttonsDisabled,
  setButtonsDisabled,
  gig,
}) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketPurchased, setticketPurchased] = useState(false);
  const [purchaseDisabled, setPurchaseDisabled] = useState(false);

  // console.log(user);

  const purchaseTicket = async (e) => {
    e.preventDefault();
    setButtonsDisabled(true);
    setPurchaseDisabled(true);
    setIsLoading(true);
    if (user === undefined) {
      setButtonsDisabled(false);
      setIsLoading(false);
      setError(
        <p className="m-0">
          Cannot purchase a ticket until your{" "}
          <Link to="/login" className="alert-link link-animation">
            logged in
          </Link>{" "}
          or{" "}
          <Link to="/signup" className="alert-link link-animation">
            sign-up
          </Link>{" "}
          here.
        </p>
      );
    }
    if (user !== undefined) {
      await updateDoc(doc(db, "users", user.uid), {
        Tickets: arrayUnion(gig.title),
      })
        // .then(() => {
        //   return updateDoc(doc(db, "gigs", gig.title), {
        //     attendees: gig.attendees + 1,
        //   });
        // })
        .then(() => {
          setButtonsDisabled(false);
          setIsLoading(false);
          setError(null);
          setticketPurchased(true);
        })
        .catch((error) => {
          // console.log(error);
          setPurchaseDisabled(false);
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

  // console.log(gig);

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Purchase a ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="d-flex align-items-center mb-3">
          <h5 className="m-0">
            {gig.title} {gig.eighteenPlus === "true" ? "🔞" : ""}
          </h5>
          &nbsp;-&nbsp;
          <h6 className="m-0">{gig.artist}</h6>
        </div>
        <p>{gig.description}</p>
        {/* <p>👤 {gig.attendees}</p> */}
        <p>📍 {gig.venueAddress}</p>
        <p>
          🗓️ {gig.start.slice(11)}{" "}
          {gig.start.slice(0, 10).split("-").reverse().join("/")} -{" "}
          {gig.finish.slice(11)}{" "}
          {gig.finish.slice(0, 10).split("-").reverse().join("/")}
        </p>
        <p>£{gig.price}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} disabled={buttonsDisabled} variant="secondary">
          Cancel
        </Button>
        <Button
          onClick={purchaseTicket}
          disabled={purchaseDisabled}
          variant="success"
        >
          Purchase
        </Button>
      </Modal.Footer>

      {isLoading === true ? (
        <BarLoader
          color="#0d6efd"
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

      {ticketPurchased === true ? (
        <Alert variant="success" className="text-center mx-5">
          Ticket Purchased! <br />
          {/* View the ticket in your&nbsp;
          <Link to="/profile" className="alert-link link-animation">
            profile
          </Link>
          ,&nbsp;or add it to your&nbsp; */}
          Add it to your&nbsp;
          <a
            href={`https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates=${`${gig.start
              .split("-")
              .join("")
              .split(":")
              .join("")}00Z`}%2F${`${gig.finish
              .split("-")
              .join("")
              .split(":")
              .join("")}00Z`}&stz=Europe/London&etz=Europe/London&details=${
              gig.description
            }&location=${gig.venueAddress}&text=${gig.title}`}
            className="alert-link link-animation"
            target="_blank"
          >
            google calendar
          </a>
          .
        </Alert>
      ) : null}
    </Modal>
  );
}

export default PurchaseGigModal;
