import request from "supertest";
import express from "express";
const app = express();


app.get("/product/*.json", (req, res) => {
    res.send(req.originalUrl)
});
app.get("/content/*(\\d+).json", (req, res) => {
    res.send(req.originalUrl)
});

test("path ", async () => {

    let response = await request(app).get("/product/app.json");
    expect(response.text).toBe("/product/app.json")

    response = await request(app).get("/product/452345.json");
    expect(response.text).toBe("/product/452345.json")
    response = await request(app).get("/content/aaaa.json");
    expect(response.status).toBe(404)
    response = await request(app).get("/content/452345.json");
    expect(response.text).toBe("/content/452345.json")
});
