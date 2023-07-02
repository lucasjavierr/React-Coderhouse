import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firestore/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";
import { ClipLoader } from "react-spinners"
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import grid from '../../assets/grid-3x3-gap-fill.svg'
import list from '../../assets/list-ul.svg'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [ products, setProducts ] = useState([]);
    const [ displayList, setDisplayList ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const { categoryId } = useParams()
    const { setNotification } = useNotification()


    useEffect(() => {
        document.title = categoryId ? categoryId : 'Todos los productos'

        return () => document.title = 'Component Hardware'
    }, [ categoryId ])


    useEffect(() => {
        const productsRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        setLoading(true)

        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                setProducts(productsAdapted)
            })
            .catch(() => {
                setNotification('error', 'Lo sentimos, se ha producido un error')
            })
            .finally(() => {
                setLoading(false)
            })
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

    return (
        <div>
            <h1 className={styles.saludo}>{greeting}</h1>
            <button onClick={() => setDisplayList(true)}><img src={list} alt='list-icon'/></button>
            <button onClick={() => setDisplayList(false)}><img src={grid} alt='grid-icon'/></button>
            <ItemListMemo products={products} displayList={displayList}/>
        </div>
    );
};

export default ItemListContainer