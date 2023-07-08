import { useState, useEffect } from "react"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"
import { useNavigate } from "react-router-dom"

import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { ClipLoader } from "react-spinners"

import ItemCheckout from "../ItemCheckout/ItemCheckout"
import styles from './Checkout.module.css'


const Checkout = () => {
    const { cart, clearCart, total } = useCart()

    const { setNotification } = useNotification()
    const navigate = useNavigate()

    const [ loading, setLoading ] = useState(false)

    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ phone, setPhone ] = useState(0)
    const [ address, setAddress ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ confirmEmail, setConfirmEmail ] = useState('')
    const [ emailError, setEmailError ] = useState('')

    const [isFormIncomplete, setIsFormIncomplete] = useState(true)

    useEffect(() => {
        if (email === '' || confirmEmail === '' || name === '' || phone === 0 || address === '') {
            setEmailError('Todos los campos deben estar completos')
            setIsFormIncomplete(true)
            return
        } else if (email !== confirmEmail) {
            setEmailError('Los campos de email deben ser iguales')
            setIsFormIncomplete(true)
            return
        } else {
            setEmailError('')
            setIsFormIncomplete(false)
        }
    }, [email, confirmEmail, name, phone, address])

    const createOrder = async (event) => {
        event.preventDefault();

        setLoading(true)

        const objOrder = {
            buyer : {
                name: name,
                surname: surname,
                address: address,
                phone: phone,
                email: email,
                time: new Date()
            },
            items : cart,
            total,
        }

        try {
            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
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

                setNotification('success', 'La órden fue generada correctamente, el ID es: ' + id, 5000)
                clearCart()
                navigate('/')

            } else {
                setNotification('error', 'Hay productos de la lista que no tienen suficiente stock')
            }

        } catch(error) {
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
        <div className={styles.checkoutContainer}>
            <h1>Checkout</h1>
            {
                cart.map(prod => <ItemCheckout key={prod.id} {...prod}/>)
            }
            <p>Total: {total}</p>
            <form onSubmit={createOrder} style={{display: 'flex', flexDirection:'column', width:'700px', margin:'0 auto'}}>
                <label>Nombre</label>
                <input 
                    required 
                    value={name} 
                    type='text' 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Ingrese su nombre"
                />
                <label>Apellido</label>
                <input 
                    required 
                    value={surname} 
                    type='text' 
                    onChange={(e) => setSurname(e.target.value)} 
                    placeholder="Ingrese su apellido"
                />
                <label>Teléfono</label>
                <input 
                    required 
                    value={phone} 
                    type='number' 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Ingrese su número de teléfono"
                />
                <label>Dirección</label>
                <input 
                    required 
                    value={address} 
                    type='text' 
                    onChange={(e) => setAddress(e.target.value)} 
                    placeholder="Ingrese su dirección"
                />
                <label>Email</label>
                <input 
                    required 
                    value={email} 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Confirmar correo electrónico"
                />
                <label>Confirmar email</label>
                <input 
                    required 
                    value={confirmEmail} 
                    type="email" 
                    onChange={(e) => setConfirmEmail(e.target.value)} 
                    placeholder="Ingrese su correo electrónico"
                />
                {emailError && <p style={{color: 'red'}}>{emailError}</p>}
                <button disabled={isFormIncomplete}>Generar órden de compra</button>
            </form>
        </div>
    )
}

export default Checkout