import Item from '../Item/Item'
import s from './ItemList.module.css'

const ItemList = ({ products, displayList }) => {
    return(
        <main className={s.divContainerList}>
            { products.map(prod => <Item key={prod.id} {...prod} displayList={displayList} /> ) }
        </main>
    )
}

export default ItemList