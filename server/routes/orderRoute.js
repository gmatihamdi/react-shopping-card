const express=require('express')
const Order = require("../models/orderModel");
const router=express.Router();
const app=express();

app.get('/api/orders',async(req,res)=>{
    const orders =await Order.find();
    res.send(orders)
})
app.post('/api/orders',async(req,res)=>{
    const order =await new Order(req.body).save();
    res.send(order)
})
app.delete('/api/orders/:id',async(req,res)=>{
    const deletedOrder =await Order.findByIdAndDelete(req.params.id);
    res.send(deletedOrder)
})

module.exports=router