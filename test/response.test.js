import request from "supertest";
import express from "express";
const app = express();

test("response ", async () => {
  app.get("/", (req, res) => {
    res.send("http response");
  });

  const response = await request(app).get("/");
  expect(response.text).toBe("http response");
});
