import "./carrito.css";
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import "./carrito.css";


export default function Carrito() {
  return (
    <section>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Carrito</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  Productos
                </div>
              </div>
            </div>
            <CarritoElementos />
            <div className="back-to-shop">
              <a href="#" style={{ textDecoration: "none" }}>
                ←
              </a>
              <span className="text-muted">Volver</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Resumen</b>
              </h5>
            </div>
            <div className="row">
              <div className="col" style={{ "padding-left": "0;" }}>
                Total de los productos
              </div>
              <div className="col text-right"><CarritoTotal /></div>
            </div>
            <form>
              <p>ENVIO</p>
              <select>
                <option className="text-muted">Envio normal- $ 5.00</option>
              </select>
            </form>
            <div
              className="row"
              style={{
                "border-top": "1px solid rgba(0,0,0,.1);",
                padding: "2vh 0;",
              }}
            >
              <div className="col">TOTAL</div>
              <div className="col text-right"></div>
            </div>
            <button className="btn">CONFIRMAR</button>
          </div>
        </div>
      </div>
    </section>
  );
}
