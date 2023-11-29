import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import React from "react";
import "./carrito.css";
import CarritoContador from "./CarritoContador";

const CarritoElementos = () => {
  const { cart, setCart } = useContext(dataContext);

  const eliminarProducto = (id) => {
    const BuscarId = cart.find((elemento) => elemento.id === id);

    const NuevoCarrito = cart.filter((elemento) => {
      return elemento !== BuscarId;
    });

    setCart(NuevoCarrito);
  };

  return cart.map((producto) => {
    return (
      <div className="row border-top border-bottom" key={producto.id}>
        <div className="row main align-items-center">
          <div className="col-2">
            <img
              className="img-fluid"
              src={producto.img}
              alt="img-productos-card"
            />
          </div>
          <div className="col">
            <div className="row">{producto.caracteristicas}</div>
          </div>
          <div className="col">
            <CarritoContador producto={producto} cantidad={producto.cantidad} />
          </div>
          <div className="col">
            ${producto.precio}
            {/* ${producto.precio * producto.cantidad} */}
            
            <h3 className="close" onClick={() => eliminarProducto(producto.id)}>
              ❌
            </h3>
          </div>
        </div>
      </div>
    );
  });
};

export default CarritoElementos;
