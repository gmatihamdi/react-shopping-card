const express = require('express');
const cors = require('cors');
const http = require('http');
const router=express.Router()
const app = express();

app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello hamdi')
});

app.listen(3000,()=>
console.log("Server is Running")
)