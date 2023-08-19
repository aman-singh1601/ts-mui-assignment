import { Component1 } from "./PageComponents/Component1";
import "./page.css";
import { Component2 } from "./PageComponents/Component2";
export const Page = () => {
  return (
    <div className="page">
      <Component1 />
      <Component2 />
    </div>
  );
};
