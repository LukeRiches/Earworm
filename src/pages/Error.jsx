import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ErrorPage({ error }) {
  if (error) {
    return (
      <section>
        <Alert
          variant="light"
          className="col-xxl-3 col-lg-5 col-sm-8 col-10 text-center m-auto px-4 py-3 my-3"
        >
          <h1>{error.code}</h1>
          <Alert.Heading>{error.message}</Alert.Heading>

          <br />
          <hr />
          <Link to="/" className="alert-link link-animation">
            Go back!
          </Link>
        </Alert>
      </section>
    );
  } else {
    return (
      <section>
        <Alert
          variant="light"
          className="col-xxl-3 col-lg-5 col-sm-8 col-10 text-center m-auto px-4 py-3 my-3"
        >
          <h1>404</h1>
          <Alert.Heading>Page Not Found</Alert.Heading>
          Sorry, this page doesn't exist
          <br />
          <hr />
          <Link to="/" className="alert-link link-animation">
            Go back Home!
          </Link>
        </Alert>
      </section>
    );
  }
  r;
}

export default ErrorPage;
