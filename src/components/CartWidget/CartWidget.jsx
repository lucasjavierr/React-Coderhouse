import styles from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <div className={styles.cartContainer}>
            <Link to='/cart'>
                <i className="bi bi-cart"></i>
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget;