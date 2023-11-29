import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import axios from "axios";

export default function Carrito() {
  const { cart, setCart } = useContext(dataContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcular el total correctamente sumando los precios de los productos en el carrito
    const newTotal = cart.reduce(
      (acc, el) => acc + el.precio * el.cantidad,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleCompra = async () => {
    const cartDetails = cart.map((item) => ({
      id: item.id,
      cantidad: item.cantidad,
    }));

    const carritoFinal = JSON.stringify(cartDetails);

    try {
      await axios.post("http://localhost:8080/carrito", {
        carritoFinal
      });
      alert("Articulos comprados con éxito");
      setCart([]);
    } catch (err) {
      alert("Error al realizar la compra");
      console.log("Error al registrar carrito: ", err);
    }
  };

  return (
    <section>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Carrito</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  Productos
                </div>
              </div>
            </div>
            <CarritoElementos />
            <div className="back-to-shop">
              <a href="#" style={{ textDecoration: "none" }}>
                ←
              </a>
              <span className="text-muted">Volver</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Resumen</b>
              </h5>
            </div>
            <div className="row">
              <div className="col" style={{ paddingLeft: "0" }}>
                Total de los productos
              </div>
              <div className="col text-right">${total}</div>
            </div>
            <form>
              <p>ENVIO</p>
              <select>
                <option className="text-muted">Envio normal- $ 5.00</option>
              </select>
            </form>
            <div
              className="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">TOTAL</div>
              <div className="col text-right">${total}</div>
            </div>
            <button className="btn" onClick={handleCompra}>
              CONFIRMAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
