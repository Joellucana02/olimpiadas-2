import React, { useEffect, useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
const access = localStorage.getItem("access");
console.log(access);
const Item_zonas = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        <div>
          <h3>Zona: {result.name}</h3>
          {access === "true" ? <button>--EDITAR--</button> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Item_zonas;
