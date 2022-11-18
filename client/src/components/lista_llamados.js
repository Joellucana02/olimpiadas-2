import React from "react";
import Item from "./item";
import Item_llamado from "./item_llamados";
const Lista_llamados = (props) => {
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
            <Item_llamado
              key={el.llamados_id}
              result={el}
              id={el.llamados_id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista_llamados;
