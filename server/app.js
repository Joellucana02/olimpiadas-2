const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const testRoute = require("./routes/ruta-primaria");
const usersRoute = require("./routes/usuarios");
const zonasRoute = require("./routes/zonas");
const pacientesRoute = require("./routes/pacientes");
const enfermerosRoute = require("./routes/enfermeros");
const salasRoute = require("./routes/salas");
const llamadosRoute = require("./routes/llamados");
const ficha_medicaRoute = require("./routes/fichas");
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

/* app.use("/", testRoute); */
app.use("/users", usersRoute);
app.use("/zonas", zonasRoute);
app.use("/enfermeros", enfermerosRoute);
app.use("/pacientes", pacientesRoute);
app.use("/salas", salasRoute);
app.use("/llamados", llamadosRoute);
app.use("/fichas", ficha_medicaRoute);

app.use((req, res, next) => {
  let err = new Error("not found");
  err.status = 404;
  return next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({ message: err.message, error: err });
  });
}

/* var os = require("os");
var networkInterfaces = os.networkInterfaces();
var arr = networkInterfaces["Local Area Connection 3"];
var ip = arr[1].address; */

/* console.dir(req.ip); */
app.listen(3010, () => {
  console.log(`server running on port 3000`);
});
