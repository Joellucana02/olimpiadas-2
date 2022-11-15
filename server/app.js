const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const testRoute = require("./routes/ruta-primaria");

app.use(morgan("tiny"));

app.use(bodyParser.json());

app.use("/", testRoute);

app.use((req, res, next) => {
  let err = new Error("not found");
  err.status = 404;
  return next(err);
});

if (app.get("env") === "development") {
  app.use((req, res, next, err) => {
    err.status(err.status || 500);
    return res.json({ message: res.message, error: err });
  });
}

app.listen(3000, () => {
  console.log("server running on port 3000");
});
