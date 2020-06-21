import React, { Component } from "react";
import API from "../utils/API";
import Book from "../components/Book";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.getSavedBooks()
      .then(({ data }) => this.setState({ savedBooks: data }))
      .catch((err) => console.log(err));
  }

  deleteBook = (index) => {
    API.deleteBook(index)
      .then((res) => {
        console.log(res);
        this.componentDidMount();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div
        style={
          this.state.savedBooks.length
            ? { padding: "20px", border: "1px solid black" }
            : {}
        }
      >
        {this.state.savedBooks.map((book, i) => (
          <Book
            sender="Saved"
            key={i}
            index={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.infoLink}
            deleteBook={this.deleteBook}
          ></Book>
        ))}
      </div>
    );
  }
}

export default Saved;
