let express = require("express");
let app = express();
app.get("/",(req,res) => {
    res.status(200).json({"message": "default"});

});

app.get("/demo",(req,res) => {
    res.status(200).json({"message": "mongodb"});

});

app.post("/",(req,res) => {
    res.status(200).json({"message": "default"});

});

app.get("/demo",(req,res) => {
    res.status(200).json({"message": "Cassandra"});

});


app.listen(8080, () => {
    console.log("Server Started");
});



