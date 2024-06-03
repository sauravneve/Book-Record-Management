const express = require("express");

const userRouter = require("./routes/users.js");
const bookRouter = require("./routes/books.js");

const app = express();

const PORT = 8081;

app.use(express.json());

// http://localhost:8081/
http: app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :-)",
    data: "Home",
  });
});

app.use("/users", userRouter);
app.use("/books", bookRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route doesn't exists",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
