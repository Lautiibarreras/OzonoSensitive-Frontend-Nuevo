import "./productos.css";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Productos = () => {
  const { data, cart, setCart, comprarProductos } = useContext(dataContext);

    return data.map((Productos) => {
      return (
        <div className="containerProductos" key={Productos.id}>
          <img
            className="img-productos"
            src={Productos.img}
            alt="img-productos-card"
          />
          <p className="product-grid__name">{Productos.nombre}</p>
          <p className="product-grid__price">${Productos.precio}</p>
          <button onClick={() => comprarProductos(Productos)}>Comprar</button>
        </div>
      );
    });
  };

  export default Productos;
