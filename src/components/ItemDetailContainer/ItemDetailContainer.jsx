import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { useAsync } from "../../custom-hooks/useAsync"
import { getProductById } from "../../services/firebase/firestore/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import s from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const { itemId } = useParams()


    const getProduct = () => getProductById(itemId)
    const { data: product, error, loading} = useAsync(getProduct, [itemId])

    useEffect(() => {
        document.title = itemId ? product.name : 'Component Hardware'

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
        return <h1 style={{textAlign:'center', fontSize:'3rem'}}>404 NOT FOUND</h1>
    }

    return(
        <main>
            <h1 className={s.detailsTitle}>Detalles del producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}

export default ItemDetailContainer