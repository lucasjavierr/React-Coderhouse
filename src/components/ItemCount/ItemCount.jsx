import { useState } from "react"
import styles from "./ItemCount.module.css"


const ItemCount = ({ stock, onAdd }) => {
    const [ count, setCount ] = useState(1)

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }

    return(
        <>
            <div className={styles.countContainer}>
                <button onClick={decrement} className={styles.countButton}>-</button>
                <h4>{count}</h4>
                <button onClick={increment} className={styles.countButton}>+</button>
            </div>
            <div className={styles.buttonCartContainer}>
                <button onClick={() => onAdd(count)} className={styles.buttonCart}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount