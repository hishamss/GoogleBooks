import React, { Component } from "react";
import API from "../utils/API";
import Book from "../components/Book";
import Nav from "../components/Nav";
import Jumbo from "../components/Jumbo";
import Wrapper from "../components/Wrapper";
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
      <div>
        <Jumbo>
          <Nav />
        </Jumbo>
        <Wrapper>
          <div style={{ padding: "20px" }}>
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
        </Wrapper>
      </div>
    );
  }
}

export default Saved;
