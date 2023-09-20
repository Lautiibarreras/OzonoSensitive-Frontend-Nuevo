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

  return cart.map((Productos) => {
    return (
      <div className="row border-top border-bottom" key={Productos.id}>
        <div className="row main align-items-center">
          <div className="col-2">
            <img
              className="img-fluid"
              src={Productos.img}
              alt="img-productos-card"
            />
          </div>
          <div className="col">
            <div className="row text-muted">{Productos.nombre}</div>
            <div className="row">Descripcion</div>
          </div>
          <div className="col">
            <CarritoContador
              Productos={Productos}
              cantidad={Productos.cantidad}
            />
          </div>
          <div className="col">
            ${Productos.precio * Productos.cantidad}
            <h3
              className="close"
              onClick={() => eliminarProducto(Productos.id)}
            >
              ❌
            </h3>
          </div>
        </div>
      </div>
    );
  });
};

export default CarritoElementos;
