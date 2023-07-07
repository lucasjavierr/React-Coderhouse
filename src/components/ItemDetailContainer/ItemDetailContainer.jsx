import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"
import { ClipLoader } from "react-spinners"
import { useAsync } from "../../custom-hooks/useAsync"
import { getProductById } from "../../services/firebase/firestore/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const { setNotification } = useNotification()

    const getProduct = () => getProductById(itemId)
    const { data: product, error, loading} = useAsync(getProduct, [itemId])
    

    useEffect(() => {
        document.title = product ? product.name : 'Component Hardware'

        return () => document.title = 'Component Hardware'
    }, [ product ])

    

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
        setNotification('error', 'Lo sentimos, ha ocurrido un error al cargar el producto')
    }

    return(
        <div>
            <h1 className={styles.detailsTitle}>Detalles del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer