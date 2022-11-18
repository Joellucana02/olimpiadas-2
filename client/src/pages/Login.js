import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../auth/auth";

const Login = () => {
  const navigate = useNavigate();
  /* const [isLogged, setIsLogged] = useState(false) */
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  /* console.log(formValues);
   */
  const handleLogin = (e) => {
    console.log("w");
    AuthLogin(formValues);
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
    }
  };
  /* 
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, [token]);
 */
  return (
    <div>
      <h2>LOGIN</h2>
      <div className="login-form__container">
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Pick a strong password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <button
            type="submit"
            value="LOGIN"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
