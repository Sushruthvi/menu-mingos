const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/cartDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const cartSchema = new mongoose.Schema({
    id: String,
    name: String,
    amount: Number,
    price: Number,
    category: String,
});

const CartItem = mongoose.model("CartItem", cartSchema);

// Routes
app.post("/cart", async (req, res) => {
    const newCartItem = new CartItem(req.body);
    await newCartItem.save();
    res.send(newCartItem);
});

app.get("/cart", async (req, res) => {
    const cartItems = await CartItem.find();
    res.send(cartItems);
});

app.delete("/cart/:id", async (req, res) => {
    await CartItem.deleteOne({ id: req.params.id });
    res.send({ message: "Item removed" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
