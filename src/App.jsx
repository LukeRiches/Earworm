import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Sign-Up.jsx";
import Profile from "./pages/Profile.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./Firebase";
import Settings from "./pages/Settings.jsx";
import UpdateEmail from "./pages/Update-Email.jsx";
import UpdatePassword from "./pages/Update-Password.jsx";
import DeleteAccount from "./pages/Delete-Account.jsx";

function App() {
  const [signedIn, setSignedIn] = useState(undefined);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  const getUserData = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserData(docSnap.data());
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
        setUser(user);
        getUserData(user);
      } else {
        setSignedIn(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header
        signedIn={signedIn}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
      />
      <Routes>
        <Route path="*" element={<Error />} />

        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        {/* {signedIn === true ? (
          <Route path="/profile" element={<Profile />}></Route>
        ) : null} */}

        <Route path="/settings" element={<Settings signedIn={signedIn} />}>
          {signedIn === true ? (
            <>
              <Route
                path="email"
                element={
                  <UpdateEmail setButtonsDisabled={setButtonsDisabled} />
                }
              ></Route>
              <Route
                path="password"
                element={
                  <UpdatePassword setButtonsDisabled={setButtonsDisabled} />
                }
              ></Route>
              <Route
                path="delete"
                element={
                  <DeleteAccount setButtonsDisabled={setButtonsDisabled} />
                }
              ></Route>
            </>
          ) : null}
        </Route>

        {signedIn === true ? null : (
          <Route
            path="/login"
            element={
              <Login
                buttonsDisabled={buttonsDisabled}
                setButtonsDisabled={setButtonsDisabled}
              />
            }
          />
        )}

        {signedIn === true ? null : (
          <Route
            path="/signup"
            element={
              <SignUp
                buttonsDisabled={buttonsDisabled}
                setButtonsDisabled={setButtonsDisabled}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
