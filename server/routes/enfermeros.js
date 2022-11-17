const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  try {
    const enfermeros = await db.query(`SELECT * FROM personal_medico`);

    return res.json(enfermeros.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/enfermero/:id", async (req, res, next) => {
  try {
    const enfermero_id = req.params.id;
    const enfermero = await db.query(
      `SELECT * FROM personal_medico WHERE personal_medico_id = ($1)`,
      [enfermero_id]
    );

    return res.json(enfermero.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const enfermero = await db.query(
      `INSERT INTO personal_medico (name,dni)VALUES ($1,$2) RETURNING *`,
      [req.body.name, req.body.dni]
    );

    return next(res.json(enfermero.rows[0]));
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
