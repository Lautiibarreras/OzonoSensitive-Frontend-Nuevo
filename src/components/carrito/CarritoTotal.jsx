import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const CarritoTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  return (
    <div className='CarritoTotal'>
      <h3>${total}</h3>
    </div>
  );
};

export default CarritoTotal
