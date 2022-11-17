const db = require("./../db");
const jwt = require("jsonwebtoken");

const secret =
  "The server will store a secret key used to encrypt and decrypt the token";

async function isAdmin(req, res, next) {
  try {
    /*  console.log(req.currentEmail); */
    const user = await db.query(`SELECT * FROM users WHERE email = ($1)`, [
      req.currentEmail,
    ]);

    if (!user.rows[0].access) {
      console.log(user.rows[0].access);
      return res.status(401).json({ message: "Sin autorizacion" });
    }
    req.currentId = user.rows[0].id;
    console.log(user.rows[0].access);
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Sin autorizacion" });
  }
}

async function ensureLoggedIn(req, res, next) {
  try {
    const tokenRecibido = req.headers.authorization.split(" ")[1];
    /* console.log(tokenRecibido); */

    const token = jwt.verify(tokenRecibido, secret);

    const user = await db.query(`SELECT * FROM users WHERE email = ($1)`, [
      token.email,
    ]);

    req.currentEmail = token.email;
    req.currentId = user.rows[0].users_id;
    req.canAccess = user.rows[0].access;
    /*  console.log("ensureloggedIn"); */
    /* console.log(user.rows[0]); */
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Sin autorizacion" });
  }
}

/* ensure current user or admin */
function ensureCurrentUser(req, res, next) {
  try {
    console.log(req.currentId);
    console.log(req.params.id * 1);
    console.log(req.canAccess);
    if (req.currentId === req.params.id * 1 || req.canAccess) {
      return next();
    } else {
      return res
        .status(401)
        .json({ message: "Sin autorizacion, diferente usuario" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Sin autorizacion" });
  }
}

module.exports = { isAdmin, ensureLoggedIn, ensureCurrentUser };
