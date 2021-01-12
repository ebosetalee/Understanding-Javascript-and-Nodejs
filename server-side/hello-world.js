const http = require("http")

http.createServer(function(req, res){
    res.writeHead(201, {"Content-Type": "text/italic"}); // yet to figure out where the head is
    res.write("Which comes first?\n")
    res.end("Hello World");
}).listen(4040);

console.log("Server started on http://127.0.0.1:4040 press Ctrl-C to terminate....")
