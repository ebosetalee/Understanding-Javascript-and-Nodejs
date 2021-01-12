const http = require("http");

http.createServer((_, res) => {
    res.write("Welcome to my Nodejs server");
    res.end();
}).listen(4040);

console.log("Server started on http://127.0.0.1:4040 press Ctrl-C to terminate....")