import request from "supertest";
import express from "express";

test("req header test", async () => {
  const app = express();

  app.get("/", (req, res) => {
    const type = req.get("accept");
    res.send(`hello ${type}`);
  });

  const response = await request(app).get("/").set("accept", "text/plain");

  expect(response.text).toBe("hello text/plain");
});
