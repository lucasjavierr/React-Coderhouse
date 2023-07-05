import { useState, useEffect } from "react";
import { getProducts } from "../../services/firebase/firestore/products";
import { useParams } from "react-router-dom";
import { useNotification } from "../../notification/NotificationService";
import { ClipLoader } from "react-spinners";
import { useAsync } from "../../custom-hooks/useAsync";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import grid from '../../assets/grid-3x3-gap-fill.svg'
import list from '../../assets/list-ul.svg'

const ItemListContainer = ({ greeting }) => {
    const [ displayList, setDisplayList ] = useState(false)
    const { categoryId } = useParams()

    const { setNotification } = useNotification()


    const getProductsWithCategory = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    useEffect(() => {
        document.title = categoryId ? categoryId : 'Todos los productos'

        return () => document.title = 'Component Hardware'
    }, [ categoryId ])


    if(loading) {
        return (
            <ClipLoader
                size={50}
                color="#91c612"
                cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                    borderWidth: '3px'
                }}
            />
        )
    }

    if(error) {
        setNotification('error', 'Lo sentimos, ha ocurrido un error al cargar los productos')
    }

    return (
        <div>
            <h1 className={styles.saludo}>{greeting}</h1>
            <button onClick={() => setDisplayList(true)}><img src={list} alt='list-icon'/></button>
            <button onClick={() => setDisplayList(false)}><img src={grid} alt='grid-icon'/></button>
            <ItemList products={products} displayList={displayList}/>
        </div>
    );
};

export default ItemListContainer