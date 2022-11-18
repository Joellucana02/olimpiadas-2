import React, { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");
console.log(access);
const Item_salas = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        <div>
          <h3>Codigo de sala: {result.num}</h3>
          <h3>Codigo de zona: {result.zona_id}</h3>
          <h3>Disponible: {result.disponible ? "SI" : "NO"}</h3>
          {access === "true" ? <button>--EDITAR--</button> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Item_salas;
