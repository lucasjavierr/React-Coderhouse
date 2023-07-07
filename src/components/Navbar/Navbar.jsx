import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNotification } from '../../notification/NotificationService'
import { ClipLoader } from 'react-spinners'
import CartWidget from '../CartWidget/CartWidget'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [ categories, setCategories ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { setNotification } = useNotification()

    useEffect(() => {
        const getCategories = async () => {
            try {
                setLoading(true)
                const categoriesRef = collection(db, 'categories')
                const querySnapshot = await getDocs(categoriesRef)
                const categoriesData = querySnapshot.docs.map(doc => doc.data())
                setCategories(categoriesData)
            } catch (error) {
                setNotification('error', 'Hubo un error al generar las categorías')
            } finally {
                setLoading(false)
            }
        }
        getCategories()
    }, [])

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
        <nav>
            <div className={styles.cartWidget}>
                <Link to='/' className={styles.logo}>Component <span>Hardware</span></Link>
                <CartWidget />
            </div>
            <div className={styles.navLinks}>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : styles.inactive}>Todos los productos</NavLink>
                {
                    categories.map((category) => {
                        return (
                            <NavLink key={category.key} to={`/category/${category.key}`} className={({isActive}) => isActive ? styles.active : styles.inactive}>{category.description}</NavLink>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar