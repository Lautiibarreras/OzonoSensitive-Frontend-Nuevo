import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import React from 'react'
import "./carrito.css"
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
            <section>
                <div className="card">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Carrito</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">Productos</div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom" key={Productos.id}>
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid" src={Productos.img} alt="img-productos-card" /></div>
                                    <div className="col">
                                        <div className="row text-muted">{Productos.nombre}</div>
                                        <div className="row">Descripcion</div>
                                    </div>
                                    <div className="col">
                                        <CarritoContador Productos={Productos}cantidad={Productos.cantidad} />
                                    </div>
                                    <div className="col">{Productos.precio * Productos.cantidad}
                                    <h3 className="close" onClick={() => eliminarProducto(Productos.id)}>❌</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="back-to-shop"><a href="#" style={{ textDecoration: 'none' }}>←</a><span className="text-muted">Volver</span></div>
                        </div>
                        <div className="col-md-4 summary">
                            <div><h5><b>Resumen</b></h5></div>
                            <div className="row">
                                <div className="col" style={{ 'padding-left': '0;' }}>Total de los productos</div>
                                <div className="col text-right">$ 132.00</div>
                            </div>
                            <form>
                                <p>ENVIO</p>
                                <select><option className="text-muted">Envio normal- $ 5.00</option></select>
                            </form>
                            <div className="row" style={{ 'border-top': '1px solid rgba(0,0,0,.1);', 'padding': '2vh 0;' }}>
                                <div className="col">TOTAL</div>
                                <div className="col text-right"></div>
                            </div>
                            <button className="btn">CONFIRMAR</button>
                        </div>
                    </div>

                </div>
            </section>
        )
    })
}

export default CarritoElementos
