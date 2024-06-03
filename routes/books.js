const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

// const { route } = require("./users");
const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Getting all books
 * Access: Public
 * Parameters: None
 */
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get all the Books",
    data: books,
  });
});

/**
 * Route: /books/:Issued
 * Method: GET
 * Description: Get All Issued Books
 * Access: Public
 * Parameters: none
 */
router.get("/:issued", (req, res) => {
  const userWithTheIssuedBook = users.filter((each) => {
    if (each.issuedBook) return each;
  });
  const issuedBooks = [];

  userWithTheIssuedBook.forEach((each) => {
    const book = books.find((book) => book.id === each.issuedBook);
    book.issuedBy = each.name;
    book.issudDate = each.issuedDate;
    book.returndate = each.returnDate;

    issuedBooks.push(book);
  });
  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Have Been Issued Yet",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Users With The Issued Books...",
    data: issuedBooks,
  });
});

/**
 * Route: /
 * Method: POST
 * Description: Add a New Book
 * Access: Public
 * Parameters: None
 * Data: id, name, author, genre, price, publisher
 */
router.post("/", (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "No Data To Add a Book",
    });
  }
  const book = books.find((each) => each.id === data.id);
  if (book) {
    return res.status(404).json({
      success: false,
      message: "ID Already Exists !!",
    });
  }
  const allBooks = { ...books, data };
  return res.status(201).json({
    success: true,
    message: "Added Book Successfully",
    data: allBooks,
  });
});

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a Book by its ID
 * Access: Public
 * Parameters: ID
 * Data: id, name, author, genre, price, publisher
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  // console.log(req.params);

  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book Not Found For This ID !!",
    });
  }
  const updateBookData = books.map((each) => {
    if (each.id === id) {
      return {
        ...each,
        ...data,
      };
    }
    return each;
  });
  return res.status(200).json({
    success: true,
    message: "Updated a Book by their ID",
    data: updateBookData,
  });
});

module.exports = router;
