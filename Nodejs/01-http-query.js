let http = require("http");
let url = require("url");

let Server = http.createServer((req,res) => {

    res.writeHead(200,{'Content-type':'text/html'});

    let obj = url.parse(req.url, true).query;

    if(obj.uname === "khushi" && obj.upwd === "happy") {
        res.writeHead("<h1> Login Succesfully </h1>");
    }
    else{
        res.writeHead("<h1> Login failed </h1>");
    }
    
    res.end();
});
Server.listen(8080);
console.log("Server is running");