import request from "supertest";
import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send("hello " + name);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/" });
  res.send("hello " + name);
});

test(" cookie read ", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "name=slebew;author=sulthon slebew");

  expect(response.text).toBe("hello slebew");
});

test("cookie write", async () => {
  const ress = await request(app).post("/login").send({ name: "udin" });

  expect(ress.get("Set-Cookie").toString()).toBe("login=udin; Path=/")
  expect(ress.text).toBe("hello udin")
});
