import { useCart } from "../../context/CartContext"
import styles from './ItemCart.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ItemCart = ({ id, name, img, price, quantity}) => {

    const { removeItem } = useCart()

    return (
        <div className={styles.cartItemContainer}>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <h3>Cantidad: {quantity}</h3>
            <h3>Precio Unitario: {price}</h3>
            <h3>Subtotal: ${quantity * price}</h3>
            <button onClick={() => removeItem(id)}><i className="bi bi-trash-fill"></i></button>
        </div>
    )
}

export default ItemCart