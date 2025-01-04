import React from "react";
import ReactDOM from "react-dom/client";
import StatrRating from "./StartRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StatrRating
      maxRating={5}
      message={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    />
    <StatrRating size={24} color="red" defaultRating={3} />

    {/* <App /> */}
  </React.StrictMode>
);
