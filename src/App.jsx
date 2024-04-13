import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
