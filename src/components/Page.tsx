import { Component1 } from "./PageComponents/Component1";
import "./page.css";
import { Component2 } from "./PageComponents/Component2";
import { Button } from "@mui/material";
export const Page = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.assign("/");
  };
  return (
    <div className="page">
      <Component1 />
      <Component2 />
      <div style={{ margin: "auto", width: "fit-content", marginTop: "10px" }}>
        <Button onClick={handleClick} variant="contained">
          Log out
        </Button>
      </div>
    </div>
  );
};
