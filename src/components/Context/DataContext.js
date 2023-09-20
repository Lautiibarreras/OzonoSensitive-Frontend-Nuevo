import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const comprarProductos = (Productos) => {
    const productotrepeat = cart.find((item) => item.id === Productos.id);

    if (productotrepeat) {
      setCart(cart.map((item) => (item.id === Productos.id ? { ...Productos, cantidad: productotrepeat.cantidad + 1 } : item)));
    } else {
      setCart([...cart, Productos]);
    }
  };

    return (
      <dataContext.Provider value={{ data, cart, setCart, comprarProductos }}>{children}</dataContext.Provider>
    );
  };

  export default DataProvider;
