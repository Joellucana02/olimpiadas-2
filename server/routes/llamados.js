const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  try {
    const llamados = await db.query(`SELECT * FROM llamados`);

    return res.json(llamados.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/llamado/:id", async (req, res, next) => {
  try {
    const llamado_id = req.params.id;
    const llamado = await db.query(
      `SELECT * FROM llamados WHERE llamados_id = ($1)`,
      [llamado_id]
    );

    return res.json(llamado.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const llamado = await db.query(
      `INSERT INTO llamados (ts, emergencia,atendido, sala_id)VALUES ($1,$2,$3,$4) RETURNING *`,
      [Date.now(), req.body.emergencia, req.body.atendido, req.body.sala_id]
    );

    return next(res.json(llamado.rows[0]));
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
