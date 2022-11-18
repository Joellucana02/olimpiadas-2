import React from "react";
import Item from "./item";
import Item_enfermeros from "./item.enfermeros";
const Lista_enfermeros = (props) => {
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
            <Item_enfermeros
              key={el.personal_medico_id}
              result={el}
              id={el.personal_medico_id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista_enfermeros;
