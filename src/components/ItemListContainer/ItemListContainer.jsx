import { useState, useEffect } from "react";
import { getProducts } from "../../services/firebase/firestore/products";
import { useParams } from "react-router-dom";
import { useNotification } from "../../notification/NotificationService";
import { ClipLoader } from "react-spinners";
import { useAsync } from "../../custom-hooks/useAsync";
import ItemList from "../ItemList/ItemList";
import ItemGrid from "../ItemGrid/ItemGrid";
import styles from "./ItemListContainer.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

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
        setNotification('error', 'Ha ocurrido un error al cargar los productos')
    }

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setDisplayList(true)}><i className='bi bi-list-task'></i></button>
                <button onClick={() => setDisplayList(false)}><i className="bi bi-grid"></i></button>
            </div>
            { displayList ? <ItemList products={products} displayList={displayList}/> : <ItemGrid products={products} displayList={displayList}/>}
        </div>
    );
};

export default ItemListContainer