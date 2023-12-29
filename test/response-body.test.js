import request from "supertest";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`
    <html>
      <head>judul</head>
      <body>
        
      </body>
    </html>
  `);
});

test("response body", async () => {
  let response = await request(app).get("/");

  expect(response.text).toBe(`
    <html>
      <head>judul</head>
      <body>
        
      </body>
    </html>
  `);
  expect(response.get("Content-Type")).toContain("text/html; charset=utf-8");
});
