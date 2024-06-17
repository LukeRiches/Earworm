import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import GigsCarousel from "./Gigs-Carousel";
import { Button } from "react-bootstrap";
import CreateGigModal from "./Create-Gig-Modal";
import PurchaseGigModal from "./Purchase-Gig-Modal copy";

function Gigs({
  user,
  userData,
  gettingUser,
  buttonsDisabled,
  setButtonsDisabled,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gigs, setGigs] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [ticketModalShow, setTicketModalShow] = useState(false);
  const [gig, setGig] = useState(undefined);

  // console.log(gig);
  // console.log(ticketModalShow);

  const getGigsData = async () => {
    setIsLoading(true);
    await getDocs(collection(db, "gigs"))
      .then((data) => {
        setIsLoading(false);
        setGigs(data.docs);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    getGigsData();
  }, []);

  return (
    <div className="px-4 py-3 my-3 text-center container">
      <h2
        className="d-flex align-items-center justify-content-start"
        id="Charts-Title"
      >
        Gigs 💃🕺🪩 &nbsp;{" "}
        {gettingUser === false && userData.User === "Artist" ? (
          <Button
            id="unstyled-button"
            size="lg"
            onClick={() => setModalShow(true)}
          >
            ➕
          </Button>
        ) : null}
      </h2>

      <CreateGigModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        error={error}
        isLoading={isLoading}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
        user={user}
        gigs={gigs}
        setGigs={setGigs}
      />

      <GigsCarousel
        gigs={gigs}
        isLoading={isLoading}
        error={error}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
        setTicketModalShow={setTicketModalShow}
        setGig={setGig}
        userData={userData}
      />

      {gig === undefined ? null : (
        <PurchaseGigModal
          show={ticketModalShow}
          onHide={() => setTicketModalShow(false)}
          buttonsDisabled={buttonsDisabled}
          setButtonsDisabled={setButtonsDisabled}
          user={user}
          gig={gig}
          setGigs={setGigs}
        />
      )}
    </div>
  );
}

export default Gigs;
