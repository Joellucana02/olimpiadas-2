const express = require("express");
const router = express.Router();
const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret =
  "The server will store a secret key used to encrypt and decrypt the token";

const {
  isAdmin,
  ensureLoggedIn,
  ensureCurrentUser,
} = require("./user_middlewares");

router.get("/", ensureLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const users = await db.query(`SELECT * FROM users`);

    return res.json(users.rows);
  } catch (error) {
    return next(error);
  }
});

router.get(
  "/user/:id",
  ensureLoggedIn,
  ensureCurrentUser,
  async (req, res, next) => {
    try {
      const user_id = req.params.id;
      const user = await db.query(`SELECT * FROM users WHERE users_id = ($1)`, [
        user_id,
      ]);

      return res.json(user.rows[0]);
    } catch (error) {
      return next(error);
    }
  }
);

router.post("/", ensureLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const info = req.body;
    const hashedPassword = await bcrypt.hash(info.password, 10);
    const user = await db.query(
      `INSERT INTO users (name, email,password, access)VALUES ($1,$2,$3,$4) RETURNING *`,
      [info.name, info.email, hashedPassword, info.access]
    );

    return next(res.json(user.rows[0]));
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const info = req.body;

    const encontrarUsuario = await db.query(
      `SELECT * FROM users WHERE email=$1 LIMIT 1`,
      [info.email]
    );
    if (encontrarUsuario.rows.length === 0) {
      return res.json({ message: "email no existente" });
    }

    const hashedPassword = await bcrypt.compare(
      info.password,
      encontrarUsuario.rows[0].password
    );

    if (hashedPassword !== true) {
      return res.json({ message: "invalid password" });
    }

    req.tipoDeAcceso = encontrarUsuario.rows[0].access;

    const token = jwt.sign({ email: encontrarUsuario.rows[0].email }, secret, {
      expiresIn: 60 * 60,
    });

    return res.json({ token });
  } catch (error) {
    return next(error);
  }
});

router.get("/dashboard", ensureLoggedIn, isAdmin, async (req, res, next) => {
  try {
    return res.json({ message: "You made it!" });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
