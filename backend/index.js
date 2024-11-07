const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User')
const bcrypt = require("bcrypt");

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Mingos")

app.post('/register', async (req, res) => {
    try {
        const { password } = req.body;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ ...req.body, password: hashedPassword });
        res.json(user);
    } catch (err) {
        res.json(err);
    }
})

app.post("/login", async (req, res) => {
    const { userid, password } = req.body;
    try {
        const user = await UserModel.findOne({ userid: userid });
        if (user) {
            // Compare the hashed password with the provided password
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.json("Login Successful");
            } else {
                res.json("Incorrect Password");
            }
        } else {
            res.json("User  does not exist");
        }
    } catch (err) {
        res.json(err);
    }
});

app.listen(3001, () =>{
    console.log("server is running")
})