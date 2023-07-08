import { useState } from "react"
import styles from "./ItemCount.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css'


const ItemCount = ({ stock, onAdd }) => {
    const [ count, setCount ] = useState(1)

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }

    return(
        <div style={{width: '100%'}}>
            <div className={styles.countContainer}>
                <button onClick={decrement}>-</button>
                <h4>{count}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div className={styles.buttonCartContainer}>
                <button onClick={() => onAdd(count)}>Agregar al carrito <i className="bi bi-cart-plus"></i></button>
            </div>
        </div>
    )
}

export default ItemCount