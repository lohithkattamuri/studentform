const express =require("express");
const app = express();
const studentRoute= require("./controller/studentRoute");
const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test11:12345@cluster0.fkxgjxr.mongodb.net/schooldb")
const bodyParser=require("body-parser");
const cors =require("cors");
var db = mongoose.connection;
db.on("open",()=>{console.log("data base connected")});
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute)
app.listen(4000,()=>{
    console.log("server started at 4000");
})