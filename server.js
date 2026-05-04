const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = 
"mongodb+srv://Angel:qwertyon_2786@cluster0.gs4tnic.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(  //m-db ni objectiga connect degan methodga 3 ta argument berish
    connectionString, //
     {
    useNewUrlParser: true,
    useUnifiedTopology: true, //data basega ulanishi uchun tru qilish kerak
}, 
(err, client) => {
    if (err) console.log("ERROR on connecting MongoDB");
    else{
        console.log("MongoDB connection succeed");
       module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
    console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    );
    }); 
   }
}
);

