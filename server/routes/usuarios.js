const express = require("express");
const router = express.Router();
const db = require("./../db");

router.get("/", async (req, res, next) => {
  try {
    const users = await db.query(`SELECT * FROM users`);

    return res.json(users.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const user = await db.query(`SELECT * FROM users WHERE users_id = ($1)`, [
      user_id,
    ]);

    return res.json(user.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const info = req.body;
    const user = await db.query(
      `INSERT INTO users (name, email,password, access)VALUES ($1,$2,$3,$4) RETURNING *`,
      [info.name, info.email, info.password, info.access]
    );

    return res.json(user.rows[0]);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
