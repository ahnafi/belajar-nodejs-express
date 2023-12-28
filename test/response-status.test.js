import request from "supertest";
import express from "express";
const app = express();

test("response ", async () => {
  app.get("/", (req, res) => {
    if (req.query.name) {
      const name = req.query.name;
      res.status(200).send(`hello ${name}`);
    } else {
      res.status(400).end();
    }
  });

  let response = await request(app).get("/").query({ name: "slebew" });

  expect(response.text).toBe("hello slebew");
  expect(response.status).toBe(200);

  response = await request(app).get("/");
  expect(response.status).toBe(400);
});
