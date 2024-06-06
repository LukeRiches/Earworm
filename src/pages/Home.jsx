import { useEffect, useState } from "react";
import Hero from "../components/Home-Hero";
import axios from "axios";
import Charts from "../components/Charts";

function Home({ setUser, setSignedIn }) {
  const [accessTokenRequestBody, setAccessTokenRequestBody] = useState(
    "grant_type=client_credentials&client_id=9aba404462ca4df5888842e7d93bed88&client_secret=d667a5b721ca423fb89cf355ad12242f"
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
