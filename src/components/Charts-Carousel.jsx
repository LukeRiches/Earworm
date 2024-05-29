import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import cardPlaceHolder from "../assets/Card-Place-Holder.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsExplicitFill } from "react-icons/bs";

function ChartsCarousel({ charts, isLoading, error }) {
  if (isLoading) {
    return (
      <div>
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
            <li key={`#1`} id="song-Item">
              <SwiperSlide key={`#1`}>
                <Card
                  className="text-start"
                  border="secondary"
                  style={{
                    width: "18rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  />
                  <Card.Body>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={2} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={7} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </li>
            <li key={`#2`} id="song-Item">
              <SwiperSlide key={`#2`}>
                <Card
                  className="text-start"
                  border="secondary"
                  style={{
                    width: "18rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  />
                  <Card.Body>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={2} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={7} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </li>
            <li key={`#3`} id="song-Item">
              <SwiperSlide key={`#3`}>
                <Card
                  className="text-start"
                  border="secondary"
                  style={{
                    width: "18rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  />
                  <Card.Body>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={2} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={7} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </li>
            <li key={`#4`} id="song-Item">
              <SwiperSlide key={`#4`}>
                <Card
                  className="text-start"
                  border="secondary"
                  style={{
                    width: "18rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  />
                  <Card.Body>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={2} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={7} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </li>
            <li key={`#5`} id="song-Item">
              <SwiperSlide key={`#5`}>
                <Card
                  className="text-start"
                  border="secondary"
                  style={{
                    width: "18rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    id="Track-Cover"
                    src={cardPlaceHolder}
                  />
                  <Card.Body>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={2} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={7} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </li>
          </ol>
        </Swiper>
      </div>
    );
  } else {
    return (
      <div>
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
            {charts.map((song, index) => {
              const myRef = useRef();

              const [isPlaying, setIsPlaying] = useState(false);

              const play = () => {
                myRef.current.play();
                setIsPlaying(true);
              };

              const pause = () => {
                myRef.current.pause();
                setIsPlaying(false);
              };

              const handleEnd = () => {
                myRef.current.pause();
                setIsPlaying(false);
              };

              return (
                <li key={`#${index + 1} ${song.track.name}`} id="song-Item">
                  <SwiperSlide key={`#${index + 1} ${song.track.name}`}>
                    <Card
                      className="text-start"
                      border="secondary"
                      style={{
                        width: "18rem",
                      }}
                    >
                      <Card.Img
                        id="Track-Cover"
                        variant="top"
                        src={song.track.album.images[0].url}
                        alt={`${song.track.name}'s cover art`}
                      />
                      <Card.Body>
                        <Card.Text id="Chart-Number">{`#${
                          index + 1
                        }`}</Card.Text>
                        <Card.Title>
                          {`${song.track.name}`}
                          {"  "}
                          {song.track.explicit ? (
                            <BsExplicitFill className="explicit-icon" />
                          ) : null}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{`${song.track.artists[0].name}`}</Card.Subtitle>

                        <audio
                          ref={myRef}
                          src={song.track.preview_url}
                          onEnded={handleEnd}
                        />

                        {song.track.preview_url !== null ? (
                          isPlaying === false ? (
                            <button
                              onClick={play}
                              className="card-img-overlay"
                              variant="secondary"
                            >
                              ▶️
                            </button>
                          ) : (
                            <button
                              onClick={pause}
                              className="card-img-overlay"
                              id="pause-button"
                              variant="secondary"
                            >
                              ⏸️
                            </button>
                          )
                        ) : null}
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

export default ChartsCarousel;
