const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  try {
    const pacientes = await db.query(`SELECT * FROM paciente`);

    return res.json(pacientes.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/paciente/:id", async (req, res, next) => {
  try {
    const paciente_id = req.params.id;
    const paciente = await db.query(
      `SELECT * FROM paciente WHERE paciente_id = ($1)`,
      [paciente_id]
    );

    return res.json(paciente.rows[0]);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const paciente = await db.query(
      `INSERT INTO paciente (name,dni)VALUES ($1,$2) RETURNING *`,
      [req.body.name, req.body.dni]
    );

    return next(res.json(paciente.rows[0]));
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
