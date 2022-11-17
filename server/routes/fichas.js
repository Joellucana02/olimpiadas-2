const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  try {
    const fichas = await db.query(`SELECT * FROM ficha_medica`);

    return res.json(fichas.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/ficha/:id", async (req, res, next) => {
  try {
    const ficha_id = req.params.id;
    const ficha = await db.query(
      `SELECT * FROM ficha_medica WHERE ficha_medica_id = ($1)`,
      [ficha_id]
    );

    return res.json(ficha.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const ficha = await db.query(
      `INSERT INTO ficha_medica (name,lastname,dni,estuvo_antes,motivo,sala_id, personal_medico_id)VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [
        req.body.name,
        req.body.lastname,
        req.body.dni,
        req.body.estuvo_antes,
        req.body.motivo,
        req.body.sala_id,
        req.body.enfermero_id,
      ]
    );

    return next(res.json(ficha.rows[0]));
  } catch (error) {
    return next(error);
  }
});

router.delete("/ficha/:id", async (req, res, next) => {
  try {
    const ficha = await db.query(
      `DELETE FROM ficha_medica
WHERE ficha_medica_id = ($1) RETURNING *`,
      [req.params.id]
    );
    return res.json(ficha.rows[0]);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
