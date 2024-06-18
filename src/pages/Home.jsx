import { useEffect, useState } from "react";
import Hero from "../components/Home-Hero";
import axios from "axios";
import Charts from "../components/Charts";

function Home({ setUser, setSignedIn }) {
  const CLIENTID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const CLIENTSECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const [accessTokenRequestBody, setAccessTokenRequestBody] = useState(
    `grant_type=client_credentials&client_id=${CLIENTID}&client_secret=${CLIENTSECRET}`
  );
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .post(`https://accounts.spotify.com/api/token`, accessTokenRequestBody, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(({ data }) => {
        // setIsLoading(false);
        // setError(null);
        setAccessToken(data.access_token);
      })
      .catch((err) => {
        // setError(err.response);
        // setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <Hero />
      <Charts
        // isLoading={isLoading}
        // error={error}
        accessToken={accessToken}
      />
    </section>
  );
}

export default Home;
