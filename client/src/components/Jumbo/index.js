import React from "react";
import "./style.css";
function Jumbo({ children }) {
  return (
    <div
      className="jumbotron text-center"
      style={{
        background: `url(${process.env.PUBLIC_URL}/jumbBG.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}

export default Jumbo;
