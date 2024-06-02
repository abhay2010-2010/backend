const express = require("express");
const { connection } = require("./config");
const User = require("./user");
const app = express();
app.use(express.json())
app.get("/", async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error);
    }

});
app.post("/add", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send({ msg: "user created succesfully", user: user })
    } catch (error) {
        res.status(200).send(error);
    }

});


app.get("/data", (req, res) => {
    res.send("This data page");
});
app.listen(3000, async () => {
    try {
        await connection;
        console.log("Server is running on port 3000");
    } catch (error) {
        console.log(error);
    }

});


