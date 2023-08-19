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
  const URL: string = window.location.href;
  const requrieDetails = URL[URL.length - 1] !== "/";
  const detailsMessage = user === null && requrieDetails;
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/page" /> : <Home message={detailsMessage} />
            }
          />
          <Route path="/page" element={user ? <Page /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
