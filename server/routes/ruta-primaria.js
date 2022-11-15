const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/test", async (req, res, next) => {
  try {
    return res.json({ message: "test successfully passed!" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
