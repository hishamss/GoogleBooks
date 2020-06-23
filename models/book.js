const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  authors: [],
  description: { type: String },
  image: { type: String },
  infoLink: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
