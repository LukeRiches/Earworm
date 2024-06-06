import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "../css/features.css";

function Features({}) {
  return (
    <div className="my-3">
      <Swiper
        modules={[Pagination, Keyboard]}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        autoHeight={true}
        className="border rounded"
        id="features-swiper"
      >
        <SwiperSlide>
          <div className="container px-4 py-5 mx-auto">
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis text-start">
                  The Initial Roll Out
                </h2>
                <p className="text-start">
                  So far my app is pretty barebones 😅, but is starting to take
                  form introducing some core functionality. Why not{" "}
                  <Link to="/" className="alert-link link-animation">
                    check out the charts
                  </Link>{" "}
                  and hear a preview of some of the tracks?
                </p>
              </div>

              <div className="col">
                <div className="d-flex flex-column row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">🏠</h3>
                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Home
                    </h4>
                    <p className="text-body-secondary me-auto text-start">
                      Every web app needs a home page...
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">🔥</h3>

                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Charts
                    </h4>
                    <p className="text-body-secondary me-auto text-start">
                      Check out the Top 50 songs Globally, in the US and UK!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container px-4 py-5 mx-auto">
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis text-start">
                  User Authentication 🪪
                </h2>
                <p className="text-start">
                  The initial integration of authentication through Firebase
                </p>
              </div>

              <div className="col">
                <div className="d-flex flex-column row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">🪧</h3>
                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Sign Up
                    </h4>
                  </div>

                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">🪵</h3>

                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Log In
                    </h4>
                  </div>

                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">⚙️</h3>

                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      User Settings
                    </h4>
                    <p className="text-body-secondary me-auto text-start">
                      Allow users to update their account or delete it as
                      needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container px-4 py-5 mx-auto">
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis text-start">
                  In Development &nbsp;🔨
                </h2>
                <p className="text-start">
                  The full integration of authentication through Firebase
                </p>
              </div>

              <div className="col">
                <div className="d-flex row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">💃🕺 </h3>
                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Profiles for Fans
                    </h4>
                    <p className="text-body-secondary me-auto text-start">
                      Sign up and get ready for our journey!
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">🎸🎤</h3>

                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Profiles for Artists
                    </h4>
                    <p className="text-body-secondary me-auto text-start">
                      Sign up and share your upcoming gigs with the community!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container px-4 py-5 mx-auto">
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis text-start">
                  Coming Soon &nbsp;🗓️
                </h2>
              </div>

              <div className="col">
                <div className="d-flex row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2 w-auto">
                    <h3 className="me-auto mb-0 display-6">🪩📍</h3>
                    <h4 className="fw-semibold mb-0 text-body-emphasis me-auto">
                      Gigs
                    </h4>
                    <p className="text-body-secondary me-auto text-start">
                      Have a look whats on in your area or across the globe and
                      get ready to let loose!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Features;
