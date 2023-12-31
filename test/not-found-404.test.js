import request from "supertest";
import express from "express";
const app = express();

app.get("/", (req, res) => {});

app.use((req, res, next) => {
  res.status(404).send("error cuy aowkok");
});

test("not found", async () => {
  const response = await request(app).get("/annf");

  expect(response.text).toBe("error cuy aowkok");
  expect(response.status).toBe(404);
});
