const express = require("express");
const { MovieModal } = require("./Schema/userSchema");
const { default: mongoose } = require("mongoose");
const { dbConnection } = require("./config/config");
const { userRoute } = require("./Routes/rutes");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/mov",userRoute)
app.listen(3000, async () => {
    await dbConnection();
   
    console.log("Server is running on port 3000");
});


