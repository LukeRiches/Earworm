const [eventbriteApiKey, setEventbriteApiKey] = useState(
  window.location.hash.slice(window.location.hash.search("access_token") + 13)
);
const [eventbriteUser, setEventbriteUser] = useState(undefined);

console.log("eventbriteApiKey", eventbriteApiKey);
console.log(window.location.hash);
console.log("userData", userData);
console.log("eventbriteUser", eventbriteUser);

if (
  user !== undefined &&
  userData !== undefined &&
  userData.eventbriteApiKey === undefined &&
  eventbriteApiKey !== ""
) {
  axios
    .get(
      `https://www.eventbriteapi.com/v3/users/me/?token=${eventbriteApiKey}`,
      {
        headers: {
          Authorization: `Bearer ${eventbriteApiKey}`,
        },
      }
    )
    .then(({ data }) => {
      // setError(null);
      setEventbriteUser(data.emails[0].email);
      // setIsLoading(false);
    })
    .catch((err) => {
      // setError(err.response);
      // setIsLoading(false);
    });
}

if (
  user !== undefined &&
  userData !== undefined &&
  userData.eventbriteApiKey === undefined &&
  eventbriteApiKey !== "" &&
  userData.Email === eventbriteUser
) {
  updateDoc(doc(db, "users", user.uid), {
    eventbriteApiKey,
  });
}

if (
  user !== undefined &&
  userData !== undefined &&
  userData.eventbriteApiKey === undefined &&
  eventbriteApiKey !== "" &&
  userData.Email !== eventbriteUser
) {
  clearCacheData();
  window.location.replace(
    `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${APIKey}&redirect_uri=http://localhost:5173/`
  );
}

const APIKey = import.meta.env.VITE_EVENTBRITE_API_KEY;
const ClientSecret = import.meta.env.VITE_EVENTBRITE_CLIENT_SECRET;
const PrivateToken = import.meta.env.VITE_EVENTBRITE_PRIVATE_TOKEN;
const PublicToken = import.meta.env.VITE_EVENTBRITE_PRIVATE_TOKEN;
