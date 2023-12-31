import request from "supertest";
import express from "express";
const app = express();

const middlewareErrorHandling = (err, req, res, next) => {
  res.status(500).send( "terjadi error" + err.message);
};

app.get("/", (req, res) => {
  throw new Error("ups");
});

app.use(middlewareErrorHandling)

// test("error handling ", async () => {
//   const response = await request(app).get("/");

//   expect(response.status).toBe(500)
//   expect(response.text).toBe("terjadi errorups")
// });
