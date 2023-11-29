import { useContext, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import React from "react";
import "./carrito.css";
import CarritoContador from "./CarritoContador";
import axios from "axios";

const CarritoElementos = () => {
  const { cart, setCart } = useContext(dataContext);

  const eliminarProducto = (id) => {
    const NuevoCarrito = cart.filter((elemento) => {
      return elemento.id !== id;
    });

    setCart(NuevoCarrito);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productIds = cart.map((item) => item.id);
      try {
        const response = await axios.post(
          "http://localhost:8080/products/details",
          { productIds }
        );
        // Actualiza los detalles del producto en el carrito
        setCart((prevCart) =>
          prevCart.map((item) => ({
            ...item,
            details: response.data.find((product) => product.id === item.id),
          }))
        );
      } catch (error) {
        console.error("Error al obtener detalles del producto:", error);
      }
    };

    fetchProductDetails();
  }, [cart, setCart]);


  return (
    <div>
      {cart.map((Productos) => {
        const precioTotal =
          Productos.details && Productos.precio
            ? Productos.precio * Productos.cantidad
            : 0;

        return (
          <div className="row border-top border-bottom" key={Productos.id}>
            <div className="row main align-items-center">
              <div className="col-2">
                {Productos.details && (
                  <img
                    className="img-fluid"
                    src={Productos.details.img}
                    alt="img-productos-card"
                  />
                )}
              </div>
              <div className="col">
                <div className="row">
                  {Productos.details && (
                    <div>{Productos.details.caracteristicas}</div>
                  )}
                </div>
              </div>
              <div className="col">
                <CarritoContador
                  Productos={Productos}
                  cantidad={Productos.cantidad}
                />
              </div>
              <div className="col">
                ${precioTotal}
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
      })}
    </div>
  );


};

export default CarritoElementos;
