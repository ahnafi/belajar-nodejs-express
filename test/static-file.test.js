import request from "supertest";
import express from "express";
const app = express();

const staticMiddleware = express.static(__dirname + "/static");
app.use("/static",staticMiddleware);

app.get("/", (req, res) => {
  res.send("hello world");
});

test("test static file", async () => {
  let response = await request(app).get("/");
  expect(response.text).toBe("hello world");
  response = await request(app).get("/static/contoh.txt");
  expect(response.text).toContain("lorem");
});
