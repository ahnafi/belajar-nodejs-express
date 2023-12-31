import request from "supertest";
import express from "express";
import fileUpload from "express-fileupload";
const app = express();

app.use(fileUpload());

app.get("/", (req, res) => {});

app.post("/upload", async (req, res) => {
  const textfile = req.files.article;
  await textfile.mv(__dirname + "/upload/" + textfile.name);
  res.send(`hello ${req.body.name} , you upload ${textfile.name}`);
});

test("upload file", async () => {
  const response = await request(app)
    .post("/upload")
    .field("name", "eko")
    .attach("article", __dirname + "/contoh.txt");

    expect(response.text).toBe("hello eko , you upload contoh.txt")
});
