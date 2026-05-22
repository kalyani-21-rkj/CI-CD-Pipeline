import express from "express";
import sum from "./sum.js";

const app = express();

const port = 8000;

app.get("/home", (req, res) => {
    res.json({
        msg: "I am root!"
    });
});

app.get("/sum/:a/:b", (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
});

app.listen(port, () => {
    console.log("app is listening on port 8000");
});