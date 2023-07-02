import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firestore/firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail"
import { ClipLoader } from "react-spinners"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const { itemId } = useParams()
    const { setNotification } = useNotification()

    useEffect(() => {
        document.title = product ? product.name : 'Component Hardware'

        return () => document.title = 'Component Hardware'
    }, [ product ])

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        setLoading(true)

        getDoc(productRef)
            .then(querySnapshot => {
                const fields = querySnapshot.data()
                const productAdapted = { id: querySnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(() => {
                setNotification('error', 'Lo sentimos, se ha producido un error')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [ itemId ])

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

    return(
        <div>
            <h1 className={styles.detailsTitle}>Detalles del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer