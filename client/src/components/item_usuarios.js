import React, { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");
console.log(access);
const Item_usuarios = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        {access ? (
          <>
            <div>
              <h3>Nombre: {result.name}</h3>
              <h3>Email: {result.email}</h3>
              <h3>Password: {result.password}</h3>
              <h3>Es Administrador: {result.estuvo_antes ? "SI" : "NO"}</h3>
              {access === "true" ? <button>--EDITAR--</button> : <></>}
            </div>
          </>
        ) : (
          <>
            <h3>No autorizado para ver informacion de usuarios</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Item_usuarios;
