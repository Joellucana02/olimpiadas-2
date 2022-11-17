const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  try {
    const zonas = await db.query(`SELECT * FROM zona`);

    return res.json(zonas.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/zona/:id", async (req, res, next) => {
  try {
    const zona_id = req.params.id;
    const zona = await db.query(`SELECT * FROM zona WHERE zona_id = ($1)`, [
      zona_id,
    ]);

    return res.json(zona.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const zona = await db.query(
      `INSERT INTO zona (name)VALUES ($1) RETURNING *`,
      [req.body.name]
    );

    return next(res.json(zona.rows[0]));
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
