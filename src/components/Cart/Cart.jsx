import style from "./Cart.module.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from '../CartItem/CartItem';


const Cart = () => {
    
    const {cart, vaciarCarrito, total, cantidadTotal  } = useContext(CartContext);


if(cantidadTotal === 0) {
    return (
        <>
        <h2>No hay Productos en el Carrito</h2>
        <Link to='/home' className={style.Option}>Productos</Link>
        </>
    )
}

return(
    <div>
        <div className={style.eliminar}>
        {cart?.map((producto) => {
            return <CartItem key={producto.id} {...producto}/>
        })}
        </div>
        <div className={style.medio}>
           <h3>Total: U$s {total} </h3> 
           <h3>Cantidad Total de Orden: {cantidadTotal} </h3>
           <button className={style.button} onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
        </div>
        <hr />
        <div>
            <Link to='/checkout' className={style.finalizar}>Finalizar Compra</Link>
        </div>

    </div>
)

}

export default Cart;