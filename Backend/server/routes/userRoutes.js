const express = require("express");
const User = require("../models/User");
const validate = require("../middleware/validate");
const userSchema = require("../schemas/userSchema");
const router = express.Router();
router.post(
 "/register",
 validate(userSchema),
 async (req, res) => {
 try {
 const user = await User.create(req.body);
 res.status(201).json({
 success: true,
 message: "User registered successfully",
 user
 });
 } catch (error) {
 res.status(500).json({
 success: false,
 message: "Server error"
 });
 }
 }
);
module.exports = router;