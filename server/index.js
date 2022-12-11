const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const router = require('./routes/router');
const orderRouter = require('./routes/orderRoute');
require ('dotenv').config();
//my app hamdi gmati dec 2022
const app=express();
app.use(bodyParser.json());
app.use('/',router);
app.use('/',orderRouter);
//mongodb+srv://hamdi:123@react.kjlkfg2.mongodb.net/shopping?retryWrites=true&w=majority
const connectionString='mongodb://localhost:27017/shopping';
mongoose.connect(process.env.MONGO_URI ||  connectionString
//    ,{useNewUrlParser:true,userUnifiedTopology:true}
    ).then(res=>console.log("connection done"))

if(process.env.NODE_ENV==='production'){
    app.use('/',express.static('public'));
    app.get("/",(req,res)=>res.sendFile(__dirname + "/public/index.html"))
}else { app.get('/',(req,res)=>res.send("api running"))}
    
const PORT=process.env.PORT
app.listen(PORT || 5001,()=>{
    console.log("Running on port 5001")
})