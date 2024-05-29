import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <div className="px-4 py-3 my-3 text-center" id="AboutHero">
      <h1 className="display-5 fw-bold">About Earworm</h1>
      <h2 className="fs-3" id="Welcome">
        Earworm is an indie web app developed by&nbsp;
        <a
          href="https://luke-riches.netlify.app/"
          target="_blank"
          className="alert-link gradient-link-animation"
        >
          Luke Riches
        </a>
        .
      </h2>
      <div className="col-xl-6 mx-auto">
        <p className="lead mb-4">
          My goal is to bridge the current divide in the streaming industry by
          syncing your music libraries from across different platforms in one
          place to get suggestions based on your entire listening history! Plus
          way more 😏
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
