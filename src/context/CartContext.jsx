import { useState, createContext, useContext } from "react"
import { useNotification } from "../notification/NotificationService"

const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { setNotification } = useNotification()

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            setNotification('error', 'El producto ya está en el carrito')
        }
    }


    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }


    const clearCart = () => {
        setCart([])
    }


    const isInCart = (id) => {
        return cart.some(prod => prod.id == id)
    }


    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }


    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
    }


    const totalQuantity = getTotalQuantity()
    const total = getTotal()


    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}