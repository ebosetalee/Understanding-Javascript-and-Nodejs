const http = require("http");

// normalize url by removing querystring, optional
// trailing slash, and making it lowercase
http.createServer((req, res) =>{
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch(path){
        case "":
            res.writeHead(201, {"Content-Type": "text/plain"}); 
            res.end("Homepage");
            break;
        case "/about":
            res.writeHead(201, {"Content-Type": "text/plain"}); 
            res.end("About");
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain"}); 
            res.end("Not Found");
            break;
    }        
}).listen(4040)

console.log("Server started on http://127.0.0.1:4040 press Ctrl-C to terminate....")
