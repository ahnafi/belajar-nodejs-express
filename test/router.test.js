import request from "supertest";
import express from "express";
const app = express();

const routerProducts = express.Router();

routerProducts.use((req, res, next) => {
  console.log("request " + req.originalUrl);
  next();
});

routerProducts.get("/products", (req, res) => {
  res.send("get products");
});

app.use(routerProducts);
app.get("/", (req, res) => {});

test("router ", async () => {
  const response = await request(app).get("/products");
  expect(response.text).toBe("get products");
});
