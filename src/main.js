import express from "express";
import request from "supertest";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/download", (req, res) => {
  res.download("./src/dump.jpg", "dump.jpg", (err) => {
    if (err) {
      console.error("Terjadi kesalahan:", err);
      res
        .status(404)
        .send("File tidak ditemukan atau ada masalah saat mengunduh.");
    } else {
      console.log("File berhasil didownload.");
    }
  });
});

app.get("/send", (req, res) => {
  res.sendFile(__dirname + "/contoh.txt");
});

console.log(__dirname)

app.listen(port, () => {
  console.log(`app listen at port ${port}`);
});
