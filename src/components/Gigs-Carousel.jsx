import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import cardPlaceHolder from "../assets/Card-Place-Holder.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function GigsCarousel({
  gigs,
  isLoading,
  error,
  setGig,
  setTicketModalShow,
  userData,
}) {
  if (isLoading) {
    return (
      <Swiper
        className="prevent-select"
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Keyboard]}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        speed={10000}
      >
        <ol>
          <li key={`#1`} id="Gig-Item">
            <SwiperSlide key={`#1`}>
              <Card
                className="text-start"
                border="secondary"
                style={{
                  width: "18rem",
                }}
              >
                {/* <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  /> */}
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>{" "}
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>
                  {/* <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={1} />
                  </Placeholder> */}
                </Card.Body>
              </Card>
            </SwiperSlide>
          </li>
          <li key={`#2`} id="Gig-Item">
            <SwiperSlide key={`#2`}>
              <Card
                className="text-start"
                border="secondary"
                style={{
                  width: "18rem",
                }}
              >
                {/* <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  /> */}
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>{" "}
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>
                  {/* <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={1} />
                  </Placeholder> */}
                </Card.Body>
              </Card>
            </SwiperSlide>
          </li>
          <li key={`#3`} id="Gig-Item">
            <SwiperSlide key={`#3`}>
              <Card
                className="text-start"
                border="secondary"
                style={{
                  width: "18rem",
                }}
              >
                {/* <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  /> */}
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>{" "}
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>
                  {/* <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={1} />
                  </Placeholder> */}
                </Card.Body>
              </Card>
            </SwiperSlide>
          </li>
          <li key={`#4`} id="Gig-Item">
            <SwiperSlide key={`#4`}>
              <Card
                className="text-start"
                border="secondary"
                style={{
                  width: "18rem",
                }}
              >
                {/* <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  /> */}
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>{" "}
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>
                  {/* <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={1} />
                  </Placeholder> */}
                </Card.Body>
              </Card>
            </SwiperSlide>
          </li>
          <li key={`#5`} id="Gig-Item">
            <SwiperSlide key={`#5`}>
              <Card
                className="text-start"
                border="secondary"
                style={{
                  width: "18rem",
                }}
              >
                {/* <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  /> */}
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder xs={3} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>{" "}
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                  </Placeholder>
                  {/* <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={1} />
                  </Placeholder> */}
                </Card.Body>
              </Card>
            </SwiperSlide>
          </li>
        </ol>
      </Swiper>
    );
  } else {
    return (
      <div>
        <Swiper
          touchStartPreventDefault={false}
          className="prevent-select"
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
        >
          <ol>
            {gigs.map((gig, index) => {
              const purchaseTicket = () => {
                setGig(gig.data());
                setTicketModalShow(true);
              };

              // userData.Tickets.forEach((ticket) => {
              //   ticket !== gig.data().ticket ?  : null
              // });

              return (
                <li key={`#${index + 1} ${gig.data().title}`} id="Gig-Item">
                  <SwiperSlide key={`#${index + 1} ${gig.data().title}`}>
                    <Card
                      className="text-start gig-card"
                      border="secondary"
                      style={{
                        width: "18rem",
                      }}
                      onClick={() => purchaseTicket(gig.data())}
                    >
                      {/* <Card.Img
                        id="Track-Cover"
                        variant="top"
                        src={gig.data().track.album.images[0].url}
                        alt={`${gig.data().summary} Gig Poster`}
                      /> */}
                      <Card.Body id="gig-card">
                        <Card.Title>{`${gig.data().title} ${
                          gig.data().eighteenPlus === "true" ? "🔞" : ""
                        }`}</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted">{`${
                          gig.data().artist
                        }`}</Card.Subtitle>

                        <Card.Text className="mb-1">{`${
                          gig.data().venueName
                        }`}</Card.Text>

                        <Card.Text className="mb-1">
                          {`${gig
                            .data()
                            .start.slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("/")}`}
                        </Card.Text>

                        {gig.data().price === 0 ? (
                          <Card.Text className="mb-1">{`Free Entry`}</Card.Text>
                        ) : (
                          <Card.Text className="mb-1">{`£${
                            gig.data().price
                          }`}</Card.Text>
                        )}

                        <Card.Text>{`👤 ${gig.data().attendees}`}</Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </li>
              );
            })}
          </ol>
        </Swiper>
      </div>
    );
  }
}

export default GigsCarousel;
