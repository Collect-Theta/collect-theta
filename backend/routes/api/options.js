const express = require("express");
const router = express.Router();

router.get("/", (req,res) => res.json({ msg: "Options"}))

module.exports = router;