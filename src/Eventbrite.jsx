// if (user !== undefined && eventbriteAccessCode === null) {
//   window.location.replace(
//     "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=DF47ZSWIK4O3FC5US6&redirect_uri=http://localhost:5173/"
//   );
// }

// if (
//   user !== undefined &&
//   eventbriteAccessCode !== null &&
//   eventbriteApiKey === undefined
// ) {
//   axios
//     .post(
//       "https://www.eventbrite.com/oauth/token",
//       // {
//       //   data: {
//       //     grant_type: "authorization_code",
//       //     client_id: "DF47ZSWIK4O3FC5US6",
//       //     client_secret: "QKMFTBTF5CSZQYZZNB5AIM62RVKSIKPFVD4R5AHUITMJF4MFAT",
//       //     code: eventbriteAccessCode,
//       //     redirect_uri: "http://localhost:5173/",
//       //   },
//       // },
//       {
//         headers: {
//           "content-type": "application/x-www-form-urlencoded",
//         },
//       }
//     .then(({ data }) => {
//       console.log(data);
//       // setIsLoading(false);
//       // setError(null);
//       // setAccessToken(data.access_token);
//     })
//     .catch((err) => {
//       console.log(err);
//       // setError(err.response);
//       // setIsLoading(false);
//     });
// }

// const clearCacheData = () => {
//   caches.keys().then((names) => {
//     names.forEach((name) => {
//       caches.delete(name);
//     });
//   });
//   console.log("Complete Cache Cleared");
// };

// if (
//   user !== undefined &&
//   userData !== undefined &&
//   eventbriteApiKey === "" &&
//   userData.eventbriteApiKey === undefined
// ) {
//   window.location.replace(
//     "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=DF47ZSWIK4O3FC5US6&redirect_uri=http://localhost:5173/"
//   );
// }

// const [eventbriteAccessCode, setEventbriteAccessCode] = useState(
//   searchParams.get("code")
// );

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
