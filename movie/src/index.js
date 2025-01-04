import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StatrRating from "./StartRating";
// import "./index.css";
// import App from "./App";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StatrRating
        color="blue"
        maxRating={7}
        onSetMovieRating={setMovieRating}
      />
      <p>this movie got {movieRating} rating</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StatrRating
      maxRating={5}
      message={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    />
    <StatrRating size={24} color="red" defaultRating={3} />
    <Test />

    {/* <App /> */}
  </React.StrictMode>
);
