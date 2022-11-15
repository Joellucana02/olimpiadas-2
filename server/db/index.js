const { Client } = require("pg");

const client = new Client({
  connectionString: `postgresql://postgres:password@localhost/codigo_azul_app`,
});

client.connect();

module.exports = client;
