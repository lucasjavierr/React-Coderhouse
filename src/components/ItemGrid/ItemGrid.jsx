import Item from '../Item/Item'
import styles from './ItemGrid.module.css'

const ItemGrid = ({ products, displayList }) => {
    return(
        <div className={styles.divContainerCards}>
            { products.map(prod => <Item key={prod.id} {...prod} displayList={displayList}/> ) }
        </div>
    )
}

export default ItemGrid
{/* la prop key va como un identificador para que react pueda comparar lo anterior con lo nuevo y hacer el render siempre va dentro del metodo .map() en el componente padre */}