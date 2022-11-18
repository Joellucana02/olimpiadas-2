import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthLogin = async (data) => {
  /* const navigate = useNavigate(); */
  try {
    console.log(`${data.email}, ${data.password}`);
    /* const la = await axios.get("http://localhost:3010/fichas"); */

    /* console.log(la); */
    const loggedUser = await axios.post("http://localhost:3010/users/login", {
      email: data.email,
      password: data.password,
    });
    /* console.log("pass?"); */
    /* console.log(loggedUser.data.token); */
    if (loggedUser.data.token) {
      localStorage.setItem("token", loggedUser.data.token);
      localStorage.setItem("access", loggedUser.data.access);
      localStorage.setItem("id", loggedUser.data.id);
      /* navigate("/"); */
    }
  } catch (error) {
    console.log("error");
  }
};
