import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'
import ClipLoader from 'react-spinners/ClipLoader'

const CreateProduct = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const createProduct = async () => {
        e.preventDefault()
        try {
            setLoading(true)
            const objproduct = { name, category, price, stock, img, description }

            const productsRef = collection(db, 'products')

            const productAdded = await addDoc(productsRef, objproduct)
            console.log(productAdded)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <ClipLoader color="#91c612" />
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>Crear producto</h1>
            <form 
                onSubmit={createProduct}
                style={{display: 'flex', flexDirection:'column', width: '500px', margin: '0 auto'}} 
            >
                <label>Nombre</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text'/>
                <label>Categoría</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} type='text'/>
                <label>Precio</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type='number'/>
                <label>Stock</label>
                <input value={stock} onChange={(e) => setStock(e.target.value)} type='number'/>
                <label>Imágen</label>
                <input value={img} onChange={(e) => setImg(e.target.value)} type='text'/>
                <label>Descripción</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type='text'/>
                <button>Crear producto</button>
            </form>
        </>
    )
}

export default CreateProduct
// ultima clase 00:00:00