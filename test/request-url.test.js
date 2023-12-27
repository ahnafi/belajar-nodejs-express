import express from "express";
import request from "supertest";

const app = express();

app.get("/hello/world", (req, res) => {
  res.json({
    path: req.path,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
  });
});

test("request url", async () => {
  const response = await request(app).get("/hello/world").query({ name: "world" });

  expect(response.body).toEqual({
    path: "/hello/world",
    originalUrl: "/hello/world?name=world",
    hostname: "127.0.0.1",
    protocol: "http",
  });
});
