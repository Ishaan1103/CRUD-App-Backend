const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello for node API server");
});



mongoose.connect("mongodb+srv://ishaanrana2635:c1f435b0@cluster0.1hdp4x2.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => {
        console.log('connected to DB');
        app.listen(3000, () => {
            console.log("server is listening at 3000 port");
        });
    })
    .catch(() => {
        console.log("Failed to connect");
    })
