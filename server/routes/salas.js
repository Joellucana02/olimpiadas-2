const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  try {
    const salas = await db.query(`SELECT * FROM sala`);

    return res.json(salas.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/sala/:id", async (req, res, next) => {
  try {
    const sala_id = req.params.id;
    const sala = await db.query(`SELECT * FROM sala WHERE sala_id = ($1)`, [
      sala_id,
    ]);

    return res.json(sala.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const sala = await db.query(
      `INSERT INTO sala (num,zona_id,disponible)VALUES ($1,$2,$3) RETURNING *`,
      [req.body.num, req.body.zona_id, req.body.disponible]
    );

    return next(res.json(sala.rows[0]));
  } catch (error) {
    return next(error);
  }
});

router.delete("/sala/:id", async (req, res, next) => {
  try {
    const sala = await db.query(
      `DELETE FROM sala
WHERE sala_id = ($1) RETURNING *`,
      [req.params.id]
    );
    return res.json(sala.rows[0]);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
