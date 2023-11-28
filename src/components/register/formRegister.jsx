import React, { useState } from 'react';
import "./formRegister.css";
import { Link } from 'react-router-dom';
import axios from 'axios';


const FormRegister = () => {
    const [formData, setForm] = useState({
        usuario: "",
        email: "",
        password: "",
        password2: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleRegister = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.password2) {
          alert("Las contrasenas deben ser coincidentes");
        } else {
          try {
            await axios.post('http://localhost:8080/register', {
              formData
            });
      
            alert("Usuario registrado exitosamente");
          } catch (error) {
            alert("Error al registrar al usuario");
            console.log("Error al registrar el usuario: ", error);
          }  
        }
      };
    
      const formStyle = {
        height: '85%',
      };
    
      const imageStyle = {
        height: '70%',
      };    
    
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Signup Form</span></div>
        <form action="#">
        <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" name="usuario" onChange={handleChange} id="usuario" placeholder="Nombre de Usuario" required />          </div>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="email" name="email" onChange={handleChange} id="email" placeholder="Correo Electronico" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" name="password" onChange={handleChange} id="password" placeholder="Contraseña" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" name="password2" onChange={handleChange} id="password2" placeholder="Ingresar Contraseña Nuevamente" required />
          </div>
          <div className="row button">
            <button type="submit" onClick={handleRegister} style={{ marginTop: 0 }}>Registrarse</button>
          </div>
          <div className="login-link">Ya tienes cuenta? 
            <Link to="/FormLogin">
                <button className="LoginNow">Inicia Sesion</button> 
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;