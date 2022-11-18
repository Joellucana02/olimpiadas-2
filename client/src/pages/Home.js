import React, { useContext, useEffect, useState } from "react";
import Lista from "../components/lista";
import Lista_zonas from "../components/lista_zonas";
import axios from "axios";
import Lista_salas from "../components/lista_salas";
import Lista_llamados from "../components/lista_llamados";
import Lista_enfermeros from "../components/lista_enfermeros";
import Lista_pacientes from "../components/lista_pacientes";
import Lista_usuarios from "../components/lista_usuarios";
import Boton_emergencia from "../components/boton_emergencia";
const Home = () => {
  const [fichas, setFichas] = useState([]);
  const [zonas, setZonas] = useState([]);
  const [salas, setSalas] = useState([]);
  const [llamados, setLlamado] = useState([]);
  const [enfermeros, setEnfermeros] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const getFichas = async () => {
      const ficha = await axios.get(`http://localhost:3010/fichas`);
      const data = await ficha.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setFichas(data);
    };
    getFichas();
  }, []);
  useEffect(() => {
    const getZonas = async () => {
      const ficha = await axios.get(`http://localhost:3010/zonas`);
      const data = await ficha.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setZonas(data);
    };
    getZonas();
  }, []);

  useEffect(() => {
    const getSalas = async () => {
      const sala = await axios.get(`http://localhost:3010/salas`);
      const data = await sala.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setSalas(data);
    };
    getSalas();
  }, []);

  useEffect(() => {
    const getLlamados = async () => {
      const llamado = await axios.get(`http://localhost:3010/llamados`);
      const data = await llamado.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setLlamado(data);
    };
    getLlamados();
  }, []);

  useEffect(() => {
    const getEnfermeros = async () => {
      const enfermero = await axios.get(`http://localhost:3010/enfermeros`);
      const data = await enfermero.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setEnfermeros(data);
    };
    getEnfermeros();
  }, []);

  useEffect(() => {
    const getPacientes = async () => {
      const paciente = await axios.get(`http://localhost:3010/pacientes`);
      const data = await paciente.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setPacientes(data);
    };
    getPacientes();
  }, []);

  useEffect(() => {
    const getUsuarios = async () => {
      const usuario = await axios.get(`http://localhost:3010/users`);
      const data = await usuario.data;
      /* const arr = Object.values(data); */

      /* console.log(typeof newData === "object"); */
      setUsuarios(data);
    };
    getUsuarios();
  }, []);
  const [values, setValues] = useState({
    fichas: "",
    llamados: "",
    users: "",
    pacientes: "",
    enfermeros: "",
    zonas: "",
    salas: "",
  });

  return (
    <>
      <h1>This is home</h1>
      <Boton_emergencia />
      <div className="cua usuarios">
        <h2>usuarios</h2>
        <Lista_usuarios value={usuarios} />
      </div>
      <div className="cua zonas">
        <h2>zonas</h2>
        <Lista_zonas value={zonas} />
      </div>
      <div className="cua salas">
        <h2>salas</h2>
        <Lista_salas value={salas} />
      </div>
      <div className="cua pacientes ">
        <h2>pacientes</h2>
        <Lista_pacientes value={pacientes} />
      </div>
      <div className="cua enfermeros">
        <h2>enfermeros</h2>
        <Lista_enfermeros value={enfermeros} />
      </div>
      <div className="cua llamados">
        <h2>llamados</h2>
        <Lista_llamados value={llamados} />
      </div>
      <div className="cua fichas">
        <h2>fichas_medicas</h2>
        <Lista value={fichas} />
      </div>
    </>
  );
};
export default Home;
