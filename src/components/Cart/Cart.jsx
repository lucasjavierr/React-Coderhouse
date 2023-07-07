import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import styles from './Cart.module.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart()

    if(!totalQuantity) {
        return (
            <div className={styles.carritoVacio}>
                <h1>Tu carrito está vacío ☹️</h1>
                <Link to='/'>Ir al inicio</Link>
            </div>
        )
    }

    return (
        <>
            <h1>Carrito</h1>
            { 
                cart.map(prod => <CartItem key={prod.id} {...prod}/>)
            }
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </>
    )
}

export default Cart