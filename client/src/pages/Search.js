import React, { Component } from "react";
import API from "../utils/API";
import Book from "../components/Book";
import Form from "../components/Form";
class Search extends Component {
  state = {
    books: [],
    search: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(({ data }) =>
        this.setState({ books: data }, () => console.log(this.state.books))
      )
      .catch((err) => console.log(err));
  };

  saveBook = (index) => {
    console.log(this.state.books[index]);
    const bookToSave = {
      title: this.state.books[index].volumeInfo.title,
      authors: this.state.books[index].volumeInfo.authors,
      description: this.state.books[index].volumeInfo.description,
      image: this.state.books[index].volumeInfo.imageLinks.thumbnail,
      infoLink: this.state.books[index].volumeInfo.infoLink,
    };
    API.saveBook(bookToSave)
      .then((res) => {
        console.log("result", res);
        this.state.books.splice(index, 1);
        this.setState({ books: this.state.books });
      })
      .catch((err) => {
        console.log("Smth Went Wrong Or Book already Exists!!!", err);
      });
  };

  render() {
    return (
      <div>
        <Form
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <div
          style={
            this.state.books.length
              ? { padding: "20px", border: "1px solid black" }
              : {}
          }
        >
          {this.state.books.map((book, i) => (
            <Book
              sender="Search"
              key={i}
              index={i}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              saveBook={this.saveBook}
            ></Book>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
