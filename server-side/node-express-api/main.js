const express = require("express");
const bodyParser = require("body-parser");
const csv = require("csv-parser")

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({extended: false }))
// use app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(bodyParser.json())
// use app.use(express.json()); 


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

//const baseurl = "http://localhost:4041/imgs/"
/*
fs.readdir(__dirname + "/imgs/", (err, files) => {
    if (err){
        res.status(400).json({message: err});
    }
    let filenames = [];
    files.forEach(file => {
        filenames.push({
            name : file,
            location : baseurl + file,
        });
    });
    return res.status(200).json(filenames)
})*/