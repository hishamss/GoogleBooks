import axios from "axios";

export default {
  // Gets all books
  getBooks: function (bookName) {
    return axios.get(`/api/search/?q=${bookName}`);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
};
