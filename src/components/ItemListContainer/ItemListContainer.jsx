import { useState } from "react";
import { getProducts } from "../../services/firebase/firestore/products";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAsync } from "../../custom-hooks/useAsync";
import { getCategories } from "../../services/firebase/firestore/products";
import ItemList from "../ItemList/ItemList";
import ItemGrid from "../ItemGrid/ItemGrid";
import styles from "./ItemListContainer.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

const ItemListContainer = ({ greeting }) => {
    const [ displayList, setDisplayList ] = useState(false)
    const { categoryId } = useParams()


    const getProductsWithCategory = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


    getCategories()
        .then(resolve => {
            const category = resolve.find(cat => cat.key === categoryId)
            document.title = categoryId ? category.description : 'Todos los productos'
        })


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
        return <h1 style={{textAlign:'center', fontSize:'3rem'}}>404 NOT FOUND</h1>
    }

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setDisplayList(true)}><i className='bi bi-list-task'></i></button>
                <button onClick={() => setDisplayList(false)}><i className="bi bi-grid"></i></button>
            </div>
            { displayList ? <ItemList products={products} displayList /> : <ItemGrid products={products} displayList={displayList} />}
        </div>
    );
};

export default ItemListContainer