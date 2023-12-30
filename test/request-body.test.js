import request from "supertest";
import express from "express";
const app = express();

test(" request body json", async () => {
  app.use(express.json());

  app.post("/json", (req, res) => {
    res.json({ hello: "hello " + req.body.name });
  });

  const response = await request(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({ name: "world" });

  expect(response.body).toEqual({ hello: "hello world" });
});

test("req body form ", async () => {
  app.use(express.urlencoded({ extended: false }));

  app.post("/form", (req, res) => {
    res.json({ hello: "hello " + req.body.name });
  });

  const response = await request(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=world");

  expect(response.body).toEqual({ hello: "hello world" });
});
