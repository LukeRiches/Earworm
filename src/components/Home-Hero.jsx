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
        <p className="lead mb-4">
          Browse and preview the hottest tracks around the world! Check
          the&nbsp;
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
