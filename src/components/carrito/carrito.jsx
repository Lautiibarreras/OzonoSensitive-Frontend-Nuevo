import './carrito.css';
import IMAGEN from '../../img/IMAGEN.png'; 


export default function Carrito() {

    return (
        <section>
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Carrito</b></h4></div>
                            <div class="col align-self-center text-right text-muted">3 Productos</div>
                        </div>
                    </div>    
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={IMAGEN}/></div>
                            <div class="col">
                                <div class="row text-muted">Tipo</div>
                                <div class="row">Descripcion</div>
                            </div>
                            <div class="col">
                                <button href="#">-</button><a href="#" class="border">1</a><button href="#">+</button>
                            </div>
                            <div class="col">$ 44.00 <button class="close">&#10005;</button></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={IMAGEN}/></div>
                            <div class="col">
                                <div class="row text-muted">Tipo</div>
                                <div class="row">Descripcion</div>
                            </div>
                            <div class="col" >
                                <button href="#">-</button><a href="#" class="border">1</a><button href="#">+</button>
                            </div>
                            <div class="col">$ 44.00 <button class="close">&#10005;</button></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={IMAGEN}/></div>
                            <div class="col">
                                <div class="row text-muted">Tipo</div>
                                <div class="row">Descripcion</div>
                            </div>
                            <div class="col">
                                <button href="#">-</button><a href="#" class="border">1</a><button href="#">+</button>
                            </div>
                            <div class="col">$ 44.00 <button class="close">&#10005;</button></div>
                        </div>
                    </div>
                    <div class="back-to-shop"><a href="#" style={{textDecoration:'none'}}>←</a><span class="text-muted">Volver</span></div>
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Resumen</b></h5></div>
                    <div class="row">
                        <div class="col" style={{'padding-left':'0;'}}>Total de los productos</div>
                        <div class="col text-right">$ 132.00</div>
                    </div>
                    <form>
                        <p>ENVIO</p>
                        <select><option class="text-muted">Envio normal- $ 5.00</option></select>
                        <p>CODIGO POSTAL</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div class="row" style={{'border-top': '1px solid rgba(0,0,0,.1);', 'padding': '2vh 0;'}}>
                        <div class="col">TOTAL</div>
                        <div class="col text-right">$ 137.00</div>
                    </div>
                    <button class="btn">CONFIRMAR</button>
                </div>
            </div>
            
        </div>
        </section>
        
    )
}