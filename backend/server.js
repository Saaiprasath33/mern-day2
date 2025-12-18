const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.log("-----------------------------------------");
        console.log("MongoDB Connection Failed:", err.message);
        console.log("SWITCHING TO IN-MEMORY MOCK DATABASE");
        console.log("User data will NOT be saved after restart.");
        console.log("-----------------------------------------");
        global.mockDB = true;
    });

app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


