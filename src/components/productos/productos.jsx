import './productos.css'
import IMAGEN from '../../img/IMAGEN.png'



export default function Productos() {

    return (
        <div className="containerProductos">

    
            <div className="product-grid">
                <div className="product-grid__item">
                    <div className="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p className="product-grid__name">Naranja</p>
                        <p className="product-grid__price">$9.00 / kg</p>
    
                        <a href="#" className="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito"  >Agregar al carrito</a>
    
                    </div>
    
                </div>
    
                <div className="product-grid__item">
                    <div className="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p className="product-grid__name">Manzana</p>
                        <p className="product-grid__price">$5.00 / kg</p>
                        <a href="#" className="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito" >Agregar al carrito</a>
                    </div>
    
                </div>
    
                <div className="product-grid__item">
                    <div className="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div className="product-grid__info">
                        <p className="product-grid__name">Limón</p>
                        <p className="product-grid__price">$3.00 / kg</p>
                        <a href="#" className="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                    </div>
    
                </div>
    
                <div className="product-grid__item">
                    <div className="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p className="product-grid__name">Platano</p>
                        <p className="product-grid__price">$5.50 / kg</p>
                        <a href="#" className="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                    </div>
    
                </div>
    
            </div>
        </div>
    )
}