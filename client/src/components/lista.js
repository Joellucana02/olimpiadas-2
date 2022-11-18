import React from "react";
import Item from "./item";
const Lista = (props) => {
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
            <Item
              key={el.ficha_medica_id}
              result={el}
              id={el.ficha_medica_id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista;
