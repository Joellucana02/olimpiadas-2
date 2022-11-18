import React from "react";
import Item from "./item";
import Item_salas from "./item_salas";
const Lista_salas = (props) => {
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
            <Item_salas key={el.sala_id} result={el} id={el.sala_id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista_salas;
