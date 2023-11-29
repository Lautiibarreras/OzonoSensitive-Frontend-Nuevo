import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./productos.css";

const Productos = () => {
  const { comprarProductos } = useContext(dataContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:8080/productos");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="pruductos">
      {productos.map(producto => (
        <div className="containerProductos" key={producto.id}>
          <img className="img-productos" src={producto.img}/>
          <p className="product-grid__name">{producto.nombre}</p>
          <p className="product-grid__price">${producto.precio}</p>
          <button onClick={() => comprarProductos(producto)}>Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
