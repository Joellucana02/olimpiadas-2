import React, { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");
console.log(access);
const Item_llamado = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        <div>
          <h3>Fecha del llamado: {Date(result.ts)}</h3>
          <h3>DNI: {result.dni}</h3>
          <h3>Llamado de emergencia: {result.emergencia ? "SI" : "NO"}</h3>
          <h3>Fue atendido: {result.atendido ? "SI" : "NO"}</h3>
          <h3>Codigo de sala de origen: {result.sala_id}</h3>
          {access === "true" ? <button>--EDITAR--</button> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Item_llamado;
