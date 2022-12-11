const mongoose=require('mongoose')
const orderSchema = require('../schema/orderSchema')
//rectif
const Order=mongoose.model('order',orderSchema)
module.exports=Order