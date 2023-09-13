import "./productos.css";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Productos = () => {
  const { data } = useContext(dataContext);
  console.log(data);
  return data.map((Productos) => {
    return (
      <div className="containerProductos">
        <img
          className="img-productos"
          src={Productos.img}
          alt="img-productos-card"
        />
        <p className="product-grid__name">{Productos.nombre}</p>
        <p className="product-grid__price">${Productos.precio}</p>
        <button>Comprar</button>
      </div>
    );
  });
};

export default Productos;
