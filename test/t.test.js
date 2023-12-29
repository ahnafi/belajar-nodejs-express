import request from "supertest";
import express from "express";
const app = express();

app.get("/", (req, res) => {});

test(" ", async () => {
  const response = await request(app).get("/");
});
