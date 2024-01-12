const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
});

const conection = mongoose.connection;
conection.once("open", () => {
    console.log("Mongodb Connection success!");
})

const supplierRouter = require("./roues/suppliers.js");

app.use("/supplier",supplierRouter);



const orderRouter = require("./roues/orders.js");

app.use("/orders",orderRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on the prot number: ${PORT}`);
})