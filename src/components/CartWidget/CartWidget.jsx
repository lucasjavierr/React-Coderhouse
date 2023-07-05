import cart from '../../assets/cart.svg'
import styles from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <div className={styles.cartContainer}>
            <Link to='/cart'>
                <img src={cart} alt='cart-widget'/>
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget;