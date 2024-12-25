const http = require("http");
const url = require("url");//get input via url

const server = http.createServer((req, res) => { // create server
    const parsedUrl = url.parse(req.url,true);
   // console.log(parsedUrl);
    if (parsedUrl.pathname === "/"){ // to empty url
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write("<h1>Home Page </h1>");
        res.end();
    }
    else if (parsedUrl.pathname === "/about") { // contact
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>About Us<h1>");
        res.end();
    }
    else if (parsedUrl.pathname === "/contact") { // about
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>About Us<h1>");
        res.end();
    }
    else {
        res.writeHead(404 , { "Content-Type" : "text/html"}); // page not found
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});

server.listen(3000,() => { //assign a port
    console.log("Server running on http://localhost:3000"); 
});