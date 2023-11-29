import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CarritoContador = ({ producto, cantidad }) => {
  const { cart, setCart, comprarProductos } = useContext(dataContext);

  const restar = () => {
    const productoRepetido = cart.find((item) => item.id === producto.id);

    if (productoRepetido.cantidad !== 1) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...producto, cantidad: Number(productoRepetido.cantidad) - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <p className="boton-contador" onClick={restar}>
        -
      </p>
      <p>{cantidad}</p>
      <p className="boton-contador" onClick={() => comprarProductos(producto)}>
        +
      </p>
    </>
  );
};

export default CarritoContador;
