import React from "react";
import ReactDOM from "react-dom/client";
import StatrRating from "./StartRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StatrRating maxRating={5} />
    <StatrRating maxRating={10} />
    <StatrRating />
    {/* <App /> */}
  </React.StrictMode>
);
