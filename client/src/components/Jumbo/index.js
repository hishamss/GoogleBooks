import React from "react";
import "./style.css";
function Jumbo() {
  return (
    <div
      className="jumbotron text-center"
      style={{
        background: `url(${process.env.PUBLIC_URL}/jumbBG.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="display-4">
        <strong>(React) Google Books Search</strong>
      </h1>
      <p className="lead">
        <strong>Search for and Save Books from Google API!</strong>
      </p>
    </div>
  );
}

export default Jumbo;
