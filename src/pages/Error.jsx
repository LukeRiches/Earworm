import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function ErrorPage({ error }) {
  return (
    <Alert
      variant="light"
      className="col-xxl-3 col-lg-5 col-sm-8 col-10 text-center m-auto px-4 py-3 my-3"
    >
      <h1>404</h1>
      <Alert.Heading>Page Not Found</Alert.Heading>
      Sorry, this page doesn't exist
      <br />
      <hr />
      <Alert.Link href="/" className="link-animation">
        Go back Home!
      </Alert.Link>
    </Alert>
  );
}

export default ErrorPage;
