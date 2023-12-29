import request from "supertest";
import express from "express";
const app = express();

app.get("/",(req,res)=>{
    // res.redirect("/next-page")
    // res.redirect(301,"/next-page")
    res.redirect("http://www.google.com")
    // 
})

test('redirect ',async () => {
    
    const response = await request(app).get("/")

    expect(response.status).toBe(302)
    // expect(response.get("Location")).toBe("/next-page")
    expect(response.get("Location")).toBe("http://www.google.com")
});