import request from "supertest";
import express from "express";
const app = express();

const logging = (req, res, next) => {
  console.log(`receive method ${req.method} and route ${req.url}`);
  console.log(`tanggal = ${res.datenow}`)
  next();
};

const setheader = (req, res, next) => {
  res.set("X-Powered-By", "slebew");
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apikey) {
    console.log(req.query.apikey)
    next();
  } else {
    res.status(401).end();
  }
};

function getdatenow(req,res,next){
    res.datenow = new Date();
    next()

}

app.use(getdatenow)
app.use(logging);
app.use(apiKeyMiddleware);
app.use(setheader);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/name", (req, res) => {
  res.send("hello name");
});

test("middleware ", async () => {
  const response = await request(app).get("/").query({apikey:"a"});

  expect(response.get("X-Powered-By")).toBe("slebew");
  expect(response.text).toBe("hello world");
});
test("middleware 2", async () => {
  const response = await request(app).get("/name").query({apikey:"sdsggserg"});

  expect(response.get("X-Powered-By")).toBe("slebew");
  expect(response.text).toBe("hello name");
});
test.failing("middleware unauthorize", async () => {
    const response = await request(app).get("/");
  
    expect(response.get("X-Powered-By")).toBe("slebew");
    expect(response.text).toBe("hello name");
  });