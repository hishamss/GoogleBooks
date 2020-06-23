import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="form-group">
        <label>Search For Book</label>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          type="text"
          name="search"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default Form;
