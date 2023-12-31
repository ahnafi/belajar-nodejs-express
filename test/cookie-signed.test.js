import request from "supertest";
import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser("cookie nya rahasia"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["name"];
  res.send("hello " + name);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/", signed: true });
  res.send("hello " + name);
});

test(" cookie read ", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "name=s%3Audin.G1Ry%2BUt3HxxeQ2aJ8ty2bxRCeQGJml8yTp4A9%2FnPzG8");

  expect(response.text).toBe("hello udin");
});

test("cookie write", async () => {
  const response = await request(app).post("/login").send({ name: "udin" });
  console.log(response.get("Set-Cookie").toString());
  expect(response.get("Set-Cookie").toString()).toContain("udin");
  expect(response.text).toBe("hello udin");
});
