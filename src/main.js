import express from "express";
import request from "supertest";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app listen at port ${port}`);
});
