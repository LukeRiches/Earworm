import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />

        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
