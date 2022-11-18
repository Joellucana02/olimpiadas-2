import React from "react";
import Item from "./item";
import Item_paciente from "./item_pacientes";
const Lista_pacientes = (props) => {
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
            <Item_paciente
              key={el.paciente_id}
              result={el}
              id={el.paciente_id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista_pacientes;
