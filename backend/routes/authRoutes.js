const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const MockUser = require("../models/MockUser");

const getModel = () => global.mockDB ? MockUser : User;

const router = express.Router();

router.get("/register", (req, res) => {
    res.status(405).json({
        error: "Method Not Allowed",
        message: "Use POST method to register",
        requiredBody: { name: "string", email: "string", password: "string" }
    });
});

router.get("/login", (req, res) => {
    res.status(405).json({
        error: "Method Not Allowed",
        message: "Use POST method to login",
        requiredBody: { email: "string", password: "string" }
    });
});
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await getModel().create({
            name,
            email,
            password: hashedPassword,
        });

        res.json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(400).json({ error: err.message || "Registration failed" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await getModel().findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        token,
        user: { name: user.name, email: user.email },
    });
});

module.exports = router;
