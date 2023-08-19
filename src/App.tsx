import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import { Home } from "./components/Home";
import { Page } from "./components/Page";

function App() {
  //@ts-ignore
  const user = localStorage.getItem("profile");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={user ? <Page /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
