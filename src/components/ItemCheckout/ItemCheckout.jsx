import styles from './ItemCheckout.module.css'

const ItemCheckout = ({ img, name, quantity, price}) => {
    return(
        <div className={styles.itemCheckoutContainer}>  
            <img src={img} alt={name} style={{width:'150px'}}/>
            <h2>{name}</h2>
            <h3>Cantidad: {quantity}</h3>
            <h3>Precio unitario: {price}</h3>
            <h3>Subtotal: {quantity * price}</h3>
        </div>
    )
}

export default ItemCheckout