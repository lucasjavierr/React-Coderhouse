import s from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <div className={s.cartWidgetContainer}>
            <Link to='/cart'>
                {totalQuantity === 0 ? <i className="bi bi-cart"></i> : <i className="bi bi-cart-fill"></i>}
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget;