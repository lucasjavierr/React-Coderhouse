import { getDocs, collection, query, where, doc, getDoc} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {

    const productsRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

    return getDocs(productsRef)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })

            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

export const getProductById = (itemId) => {
    const productRef = doc(db, 'products', itemId)

    return getDoc(productRef)
        .then((querySnapshot) => {
            if(querySnapshot.exists()) {
                const fields = querySnapshot.data()
                const productAdapted = { id: querySnapshot.id, ...fields }
                return productAdapted
            } else {
                throw new Error('El producto ingresado no existe')
            }
        })
        .catch((error) => {
            throw error
        })
}