import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CarritoContador = ({ Productos, cantidad }) => {
    const { cart, setCart, comprarProductos } = useContext(dataContext);

    const restar = () => {
        const productotrepeat = cart.find((item) => item.id === Productos.id);

        productotrepeat.cantidad !== 1 &&
            setCart(cart.map((item) => (item.id === Productos.id ? { ...Productos, cantidad: productotrepeat.cantidad - 1 } : item)));

    };

    return (
        <>
            <p className='boton-contador' onClick={() => restar(Productos)}>-</p>
            <p>{cantidad}</p>
            <p className='boton-contador' onClick={() => comprarProductos(Productos)}>+</p>
        </>
    )
}

export default CarritoContador