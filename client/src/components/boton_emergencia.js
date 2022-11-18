import React, { useEffect, useState } from "react";
import axios from "axios";

const Boton_emergencia = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    const handleCod = async () => {
      try {
        const codigo = await axios.post(`http://localhost:3010/llamados`, {
          emergencia: true,
          atendido: false,
          sala_id: 1,
        });
        toggle();
        console.log(codigo);
      } catch (error) {
        console.log(error);
      }
    };
    handleCod();
  }, []);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <div>
        <div className="Boton-emergencia">
          <h2 className="time">{seconds}s</h2>
          <button
            className={`button${isActive ? "active" : "inactive"}`}
            onClick={toggle}
          >
            {isActive ? "PARAR" : "CODIGO AZUL"}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Boton_emergencia;
