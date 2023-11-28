import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./formLogin.css";
import axios from 'axios';




const FormLogin = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
          await axios.post('http://localhost:8080/login', {
            usuario,
            password
          });
    
          alert("Login exitoso");
        } catch (error) {
          alert("Login fallido");
          console.log("Error al ingresar: ", error);
        }
    };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} id="usuario" placeholder="Nombre de Usuario" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Contraseña" required />          </div>
          <div className="pass"><a href="#">Forgot password?</a></div>
          <div className="row button">
            <button type="submit" onClick={handleRegister}>Ingresar</button>
          </div>
          <div className="signup-link">Not a member? 
            <Link to="/FormRegister">
                <button className="SignupNow">Signup now</button> 
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
