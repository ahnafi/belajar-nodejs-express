import request from "supertest";
import express from "express";
const app = express();

app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  res.send("product " + productId);
});
app.get("/content/:id(\\d+)", (req, res) => {
  res.send("content " + req.params.id);
});

test("route parameter", async () => {
  let response = await request(app).get("/product/abcd");

  expect(response.text).toBe("product abcd");
  response = await request(app).get("/product/123");

  expect(response.text).toBe("product 123");
  response = await request(app).get("/content/321");

  expect(response.text).toBe("content 321");
  response = await request(app).get("/content/asas");

  expect(response.status).toBe(404);
});
