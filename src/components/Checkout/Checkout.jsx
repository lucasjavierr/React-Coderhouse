import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/NotificationService"
import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const { cart, clearCart, total } = useCart()
    const { setNotification } = useNotification()
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        const objOrder = {
            buyer : {
                name: 'Lucas',
                phone: '3754533779',
                email: 'santilujavier@gmail.com',
                address: 'Claudio Arrechea 1067',
            },
            items : cart,
            total,
        }

        try {
            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            // getDocs(productsRef).then(() => {})
            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc })
                }
            })

            if(outOfStock.length === 0) {
                batch.commit()

                const ordersRef = collection(db, 'orders')

                const { id } = await addDoc(ordersRef, objOrder)

                setNotification('success', 'La órden fue generada correctamente, el ID es: ' + id)
                clearCart()
                navigate('/')
            } else {
                setNotification('error', 'Hay productos de la lista no cuentan con el suficiente stock')
            }
        } catch (error) {
            setNotification('error', 'Hubo un problema al momento de generar la órden')
        } finally {
            setLoading(false)
        }
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

    return (
        <>
            <h1>Checkout</h1>
            <h2>**Formulario**</h2>
            <button onClick={createOrder}>Generar órden de compra</button>
        </>
    )
}

export default Checkout
// AFTER