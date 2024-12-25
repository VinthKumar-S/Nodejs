const http = require("http"); // protocal access

const server = http.createServer((req,res) =>
{
    res.statusCode = 200; // request process status
    res.setHeader("Content-Type","text/html");// content type
    res.end('<p>Hello World!</p>');//out put 
});

server.listen(3000,() => { //assign a port
    console.log("Server running on http://localhost:3000"); 
});