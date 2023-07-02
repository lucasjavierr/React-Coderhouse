import Item from '../Item/Item'
import styles from './ItemList.module.css'

const ItemList = ({ products, displayList }) => {
    return(
        <div className={styles.divContainerList}>
            { products.map(prod => <Item key={prod.id} {...prod} displayList={displayList}/> ) }
        </div>
    )
}

export default ItemList