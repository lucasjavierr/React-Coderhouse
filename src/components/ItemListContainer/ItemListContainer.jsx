import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../custom-hooks/useAsync";
import { getCategories } from "../../services/firebase/firestore/products";
import { ClipLoader } from "react-spinners";
import ItemList from "../ItemList/ItemList";
import ItemGrid from "../ItemGrid/ItemGrid";
import s from "./ItemListContainer.module.css";
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

    const handleMode = () => {
        
    }

    if(!categoryId && products.leght === 0) {
        return <h1 style={{textAlign:'center', fontSize:'3rem'}}>404 NOT FOUND</h1>
    }


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
        <section className={s.container}>
            <h1>{greeting}</h1>
            <div className={s.buttonsContainer}>
                <div>
                    <button 
                        onClick={() => setDisplayList(true)}>
                        <i className='bi bi-list-task'></i>
                    </button>
                    <button 
                        onClick={() => setDisplayList(false)}>
                        <i className="bi bi-grid"></i>
                    </button>
                </div>
                <div className={s.darkModeContainer}>
                    <button onClick={handleMode}>Dark Mode</button>
                </div>
            </div>
            { displayList ? <ItemList products={products} displayList /> : <ItemGrid products={products} displayList={displayList} />}
        </section>
    );
};

export default ItemListContainer