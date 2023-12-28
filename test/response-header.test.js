import request from "supertest";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res
    .set({
      "X-Powered-By": "shelbew",
      "X-Author": "sulthon",
    })
    .end();
});
test("response header", async () => {
  let response = await request(app).get("/");

  expect(response.get("X-Powered-By")).toBe("shelbew");
  expect(response.get("X-Author")).toBe("sulthon");
});
