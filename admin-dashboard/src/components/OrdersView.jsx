import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"
import ClipLoader from "react-spinners/ClipLoader"

const OrdersView = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const ordersRef = collection(db, 'orders')
                const querySnapshot = await getDocs(ordersRef)
                
                const ordersAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })

                setOrders(ordersAdapted)

            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        })()
        // funcion anónima auto-ejecutada porque en el useEffect no se pueden poner funciones asincronas
    }, [])

    if(loading) {
        return <ClipLoader color="#91c612" />
    }

    return(
        <>
            <h1>Ordenes de compra</h1>
            <div>
                {
                    orders.map(order => {
                        return (
                            <div key={order.id}>
                                <h2>ID: {order.id}</h2>
                                <h2>Comprador: {order.buyer?.name}</h2>
                                <h3>Productos</h3>
                                <div>
                                    {order.items?.map(prod => {
                                        return(
                                            <div key={prod.id}>
                                                <p>{prod.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default OrdersView