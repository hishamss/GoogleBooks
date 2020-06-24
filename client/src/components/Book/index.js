import React from "react";

function Book(props) {
  const renderButton = () => {
    if (props.sender === "Search") {
      return (
        <button type="button" onClick={() => props.saveBook(props.index)}>
          save
        </button>
      );
    } else {
      return (
        <button type="button" onClick={() => props.deleteBook(props.index)}>
          Delete
        </button>
      );
    }
  };

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
          {renderButton()}
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

export default Book;
