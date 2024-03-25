// create a webserver
// listen on port 3000
// 4 routes
// 1. GET /comments
// 2. POST /comments
// 3. PUT /comments
// 4. DELETE /comments
// Use express.js

const express = require("express");
const app = express();

app.use(express.json());
const comments = [];

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.json({ message: "Comment added" });
});

app.put("/comments", (req, res) => {
  const { id, comment } = req.body;
  comments[id] = comment;
  res.json({ message: "Comment updated" });
});

app.delete("/comments", (req, res) => {
  const { id } = req.body;
  comments.splice(id, 1);
  res.json({ message: "Comment deleted" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});