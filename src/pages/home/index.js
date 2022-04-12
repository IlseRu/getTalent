import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  ForgotPassword } from "pages";
import Boton from "components/Boton";
import "./style-home.scss";
import img1 from "assets/img1.png";


export const Home = () => {

  return (
    <div>
      <h1 className="titulo">¡Bienvenido!</h1>
      <h3 className="sub">Por favor, inicia sesión</h3>
      <form>
      <label className="">
        Correo:
        <input className="txt" placeholder="Ingrese su correo electronico" type="text" name="correo" required/>
      </label>
      <label>
        Contraseña:
        <input className="pss" placeholder="Ingrese su contraseña" type="password" name="password" required />
      </label>
      <input className="btn-log" type="submit" value="Ingresar" />
    </form>
    <img className="img1" src={img1} /> {/*Manera de colocar imagen en react*/}
    <Boton/>
    </div>
    
  );
};