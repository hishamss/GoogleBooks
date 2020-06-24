import React from "react";

function Form(props) {
  return (
    <div className="container">
      <form style={{ paddingTop: "60px" }} onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          <input
            placeholder="Search for Books from Google API!"
            style={{
              display: "inline-block",
              width: "50%",
              marginRight: "5px",
              marginTop: "60px",
            }}
            value={props.value}
            onChange={props.handleInputChange}
            type="text"
            name="search"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <button
            style={{ marginBottom: "6px" }}
            type="submit"
            className="btn btn-primary"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
