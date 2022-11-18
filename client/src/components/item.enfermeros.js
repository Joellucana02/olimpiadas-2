import React, { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");
console.log(access);
const Item_enfermeros = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        <div>
          <h3>Nombre: {result.name}</h3>
          <h3>DNI: {result.dni}</h3>
          {access === "true" ? <button>--EDITAR--</button> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Item_enfermeros;
