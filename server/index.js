const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Product = require('./models/productModel');
const router = require('./routes/router');

const app=express();
app.use(bodyParser.json());
app.use('/',router)
const connectionString='mongodb://localhost:27017/shopping';
mongoose.connect(connectionString
//    ,{useNewUrlParser:true,userUnifiedTopology:true}
    ).then(res=>console.log("connection done"))

app.listen(5001,()=>{
    console.log("Running on port 5001")
})