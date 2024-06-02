const express = require("express");
const { connection } = require("./config");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/about", (req, res) => {
    res.send("This is about page");
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


