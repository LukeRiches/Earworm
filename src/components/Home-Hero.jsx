import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div className="px-4 py-3 my-3 text-center" id="HomeHero">
      <h1 className="display-5 fw-bold">Hey You! 😉</h1>
      <h2 className="fs-3" id="Welcome">
        Welcome to Catchy, the bridge between streaming services.
      </h2>
      <div className="col-xl-6 mx-auto">
        {/* <p className="lead mb-4">
          Sync your music libraries to get suggestions based on your listening
          history or simply browse the hottest tracks around the world, find
          that sample you've been dying to put your finger on or even connect to
          a radio station on the opposite side of the globe!
        </p> */}
        <p className="lead mb-0">
          Browse the hottest tracks around the world! Click on them to listen over on &nbsp;
          <Link
            to="https://open.spotify.com/"
            className="alert-link link-animation"
            target="_blank"
          >
            Spotify{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-spotify"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
            </svg>
          </Link>
          &nbsp;
        </p>
        <p className="fs-6 mb-4">
          Check the&nbsp;
          <Link to="/about" className="alert-link link-animation">
            about
          </Link>
          &nbsp;page to find out what's coming next 👀
        </p>
      </div>
    </div>
  );
}

export default HomeHero;
