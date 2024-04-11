const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')

const app = express()

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("hello from node api server");

});


// update a product 


// delete a Product



mongoose.connect("mongodb+srv://admin:<password>@backenddb.xybwmgp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server is running in 3000");
        });
    })
    .catch(() => {
        console.log("connection failed!");
    })
