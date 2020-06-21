const db = require("../models");
console.log("controllers: ", db);
// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("create", req.body);
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
