import React from "react";
import Item from "./item";
const Lista_usuarios = (props) => {
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
            <Item key={el.users_id} result={el} id={el.users_id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Lista_usuarios;
