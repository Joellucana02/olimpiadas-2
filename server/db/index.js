/* 
CREACION DE LA BASE DE DATOS

CREATE DATABASE codigo_azul_app;

*----------------------------------------------------------------------------------*
CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  access BOOLEAN NOT NULL
);

CREATE TABLE zona (
  zona_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL  
);

  --cantidad integer ARRAY[10]--

CREATE TABLE sala(
    sala_id SERIAL PRIMARY KEY,
    num VARCHAR(2) NOT NULL,
    zona_id INTEGER NOT NULL,
    disponible BOOLEAN NOT NULL,
    CONSTRAINT fk_zona
    FOREIGN KEY (zona_id) REFERENCES zona (zona_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE paciente (
    paciente_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    dni VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE personal_medico (
    personal_medico_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    dni VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE llamados(
    llamados_id SERIAL PRIMARY KEY,
    ts VARCHAR(20) NOT NULL,
    emergencia BOOLEAN NOT NULL,
    atendido BOOLEAN NOT NULL,
    sala_id INTEGER NOT NULL,
    CONSTRAINT fk_sala
    FOREIGN KEY (sala_id) REFERENCES sala (sala_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);


CREATE TABLE ficha_medica(
    ficha_medica_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    dni VARCHAR(10) NOT NULL,
    estuvo_antes BOOLEAN NOT NULL,
    motivo VARCHAR(500) NOT NULL,
    sala_id INTEGER NOT NULL,
    CONSTRAINT fk_sala
    FOREIGN KEY (sala_id) REFERENCES sala (sala_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    personal_medico_id INTEGER NOT NULL,
    CONSTRAINT fk_personal_medico
    FOREIGN KEY (personal_medico_id) REFERENCES personal_medico (personal_medico_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION    
);



*----------------------------------------------------------------------------------*

*/

const { Client } = require("pg");

const client = new Client({
  connectionString: `postgresql://yourpassword:matias@localhost/codigo_azul_app`,
});

client.connect();

module.exports = client;
