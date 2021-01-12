const http = require("http"), 
        fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 201;
    fs.readFile(__dirname + path,(err, data) => {
        if (err){
            res.writeHead(500, {"content-Type": "text/plain"});
            console.log(err)
            res.end("500 - Internal Error");           
        }else {
            res.writeHead(responseCode, {"content-Type": contentType});
            res.end(data);
        }
    });
}


// using static files, you'll replace res to serveStaticFile function
http.createServer((req, res) =>{
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch(path){
        case "":
            res.writeHead(201, {"Content-Type": "text/plain"}); 
            res.end("Homepage");
            break;
        case "/about":
            serveStaticFile(res, "/about.html", "text/html");
            break;
        case "/logo":
            serveStaticFile(res, "/img/logo.jpg", "image.jpeg");
            break;
        default:
            serveStaticFile(res, "/404.html", "text/html", 404);
            break;
    }        
}).listen(4040)

console.log("Server started on http://127.0.0.1:4040 press Ctrl-C to terminate....")
