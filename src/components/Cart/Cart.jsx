import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import styles from './Cart.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
            <h2 className={styles.cartTitle}>Carrito</h2>
            { 
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
            <div className={styles.actionsContainer}>
                <button onClick={() => clearCart()}>Vaciar carrito <i className="bi bi-cart"></i></button>
                <div className={styles.buyNow}>
                    <h3>Total: ${total}</h3>
                    <Link to='/checkout'>Comprar</Link>
                </div>
            </div>
        </>
    )
}

export default Cart