import Navbar from "components/Navbar";
import useForms from "components/useForms";
import React, { useReducer, useState } from "react";
import img15 from "assets/img15.png";
import "./style-sig.scss";

export const SignUp = (submitForm) => {
  const initialValues = {
    email: "",
    password: "",
    password2: "",
  };
  const { handleChange, handleFormSubmit, values, errors } = useForms(
    submitForm,
    initialValues
  );

  const[framework, setFramework] = useState (1);

  const cambiaRadioFramework = e => {
    setFramework(e.target.value);
  }
  return (
    <div>
      <Navbar />
      <img className="img15" src={img15} />
      <div className="container">
      <div className="app-wrapper">
        <div>
          <h1 className="title">Registro</h1>
          <h3>¡Manos a la obra!</h3>
        </div>
        <form className="form-wrapper">
          <div className="email">
            <label className="label">Correo Electronico</label>{" "}
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="labelR">
            <label className="">Roles</label>{" "}
            <select className="roles" name="roles" onChange={handleChange}>
              <option value="1">Empleador</option>
              <option value="2">Solicitante</option>
            </select>
          </div>
          <div className="password">
            <label className="label">Contraseña</label>{" "}
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="password2">
            <label className="label">Confirmar Contraseña</label>{" "}
            <input
              className="input"
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="error">{errors.password2}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Registrarse
            </button>
            <span className="login">
              Ya tienes cuenta? Inicia Sesion <a href="../">Aqui</a>
            </span>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
