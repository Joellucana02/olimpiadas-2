import React, { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");
console.log(access);
const Item = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        <div>
          <h3>Nombre: {result.name}</h3>
          <h3>Apellido: {result.lastname}</h3>
          <h3>DNI: {result.dni}</h3>
          <h3>Estuvo antes: {result.estuvo_antes ? "SI" : "NO"}</h3>
          <h3>Motivo: {result.motivo}</h3>
          <h3>Codigo de sala: {result.sala_id}</h3>
          <h3>Codigo de enfermero asignado: {result.personal_medico_id}</h3>
          {access === "true" ? <button>--EDITAR--</button> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Item;
/* const [isAdmin, setIsAdmin] = useState(false)
 useEffect(() => {
   const getInfo = async () => {

     const ficha = await axios.get(`http://localhost:3010/users/user/${}`);
     const data = await ficha.data;

     setIsAdmin(data);
   };
   getInfo();
 }, []) */
