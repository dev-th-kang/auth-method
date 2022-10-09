import * as express from "express";

const app = express();

app.use("/", (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server Start");
});