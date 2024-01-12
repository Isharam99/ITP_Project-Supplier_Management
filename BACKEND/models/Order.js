const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    Sname : {
        type : String,
        required: true
    },
    Description: {
        type : String,
        required:true
    },
    Status : {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    // price : {
    //     type : String,
    //     required: true
    // }

})

const order = mongoose.model("order",orderSchema);

module.exports = order;