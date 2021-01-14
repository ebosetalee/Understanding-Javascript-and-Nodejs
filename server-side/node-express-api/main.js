const express = require("express");
const bodyParser = require("body-parser");
const csv = require("csv-parser")

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())


app.get("/", (_, res) => {
    res.send("Your Express App");
});

const middle = function(req, _res, next) {
    req.full_name = `${req.body['first_name'].toUpperCase()} ${req.body['last_name'].toUpperCase()}`
    return next()
}

app.post("/name", middle, function(req, res) {
    console.log(req.full_name);
    return res.status(200).json(req.body)
})

app.listen(port, () => {
    console.log(`server is runnng on port: ${port}`);
});