const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;
console.log("Testing connection to:", uri.replace(/:([^@]+)@/, ':****@')); // Hide password in logs

mongoose.connect(uri)
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB!");
        process.exit(0);
    })
    .catch(err => {
        console.error("FAILURE: Could not connect.");
        console.error("Error Name:", err.name);
        console.error("Error Code:", err.code);
        console.error("Error CodeName:", err.codeName);
        console.error("Error Message:", err.message);
        process.exit(1);
    });
