import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

import styles from './ItemDetail.module.css'

const ItemDetail = ({ id, img, name, category, description, price, stock }) => {
    const [ quantity, setQuantity ] = useState(0)
    const { addItem } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const objProduct = {
            id, name, img, price, quantity
        }

        addItem(objProduct)
        setNotification('success', `Se agregó correctamente ${quantity} ${name} al carrito`)
    }

    return(
        <div className={styles.detailContainer}>
            <div className={styles.imgDetailsContainer}>
                <img src={img} alt={name}/>
            </div>
            <div className={styles.detailsContainer}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Precio: <span>${price}</span></p>
                <p>Categoría: {category}</p>
                <p>Stock disponible: {stock}</p>
                <div className={styles.buttonFinallyContainer}>
                    {
                        quantity == 0
                        ? (stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>Sin stock</p>)
                        : <Link to='/cart' className={styles.buttonFinally}>Finalizar compra</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail