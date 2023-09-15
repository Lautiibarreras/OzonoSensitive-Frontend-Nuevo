import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import React from 'react'

const CarritoElementos = () => {
    const { cart } = useContext(dataContext);

    return cart.map((Productos) => {
        return (
            <div className="carrito" key={Productos.id}>
                <img src={Productos.img} alt="img-productos-card" />
                <h3 className="nombre">{Productos.nombre}</h3>
                <h4 className="precio">{Productos.precio}$</h4>
            </div>
        )
    })
}

export default CarritoElementos
