import React from "react";

function Book(props) {
  if (props.sender === "Search") {
    return (
      <div
        style={{
          marginBottom: "10px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>

            <p>{props.authors ? props.authors.join(", ") : "NA"}</p>
          </div>
          <div className="col">
            <button
              onClick={() => window.open(props.link, "_blank")}
              type="button"
            >
              View
            </button>

            <button type="button" onClick={() => props.saveBook(props.index)}>
              save
            </button>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <img src={props.image} alt="Book"></img>
          </div>
          <div className="col">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  } else if (props.sender === "Saved") {
    return (
      <div
        style={{
          marginBottom: "10px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>

            <p>{props.authors ? props.authors.join(", ") : "NA"}</p>
          </div>
          <div className="col">
            <button
              onClick={() => window.open(props.link, "_blank")}
              type="button"
            >
              View
            </button>

            <button type="button" onClick={() => props.deleteBook(props.index)}>
              Delete
            </button>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <img src={props.image} alt="Book"></img>
          </div>
          <div className="col">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
