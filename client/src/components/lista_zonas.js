import React from "react";
import Item from "./item";
import Item_zonas from "./item_zonas";
const Lista_zonas = (props) => {
  const { value } = props;
  /* const arr = [{ name: "vic" }, { name: "pedro" }, { name: "lan" }]; */
  return (
    <div>
      {!value ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {console.log(value)}

          {value.map((el) => (
            <Item_zonas key={el.zona_id} result={el} id={el.zona_id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista_zonas;
