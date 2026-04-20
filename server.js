console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http = require("http");

//1;Kirish codlari

app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 sessionga boglik kodlar
//3views code

app.set("views", "views");
app.set("view engine", "ejs");
 
//4routing code

app.get("/Angel", function ( req , res) {
    res.end(`<h1 style="background: red ">Hello World Im ANGEL</h1>`);
});

app.get("/gold", function ( req , res) {
    res.end(`<h1 style="background: red ">Golden moments</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});