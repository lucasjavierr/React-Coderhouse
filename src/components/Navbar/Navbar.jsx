import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'
import { getCategories } from '../../services/firebase/firestore/products'
import CartWidget from '../CartWidget/CartWidget'
import s from './Navbar.module.css'

const Navbar = () => {
    const [ categories, setCategories ] = useState([])
    const { setNotification } = useNotification()
    const menuBackdropRef = useRef(null)
    

    useEffect(() => {
        getCategories()
            .then((resolve) => {
                setCategories(resolve)
            })
            .catch((reject) => {
                setNotification('error', `Hubo un error al obtener las categorías, ${reject}`)
            })
    }, [])

    /* const handleMouseEnter = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        menuBackdropRef.current.style.setProperty('--left', `${left}px`);
        menuBackdropRef.current.style.setProperty('--top', `${top}px`);
        menuBackdropRef.current.style.setProperty('--width', `${width}px`);
        menuBackdropRef.current.style.setProperty('--height', `${height}px`);
        menuBackdropRef.current.style.opacity = '1';
    }

    const handleMouseLeave = () => {
        menuBackdropRef.current.style.opacity = '0';
    } */

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <Link to='/'>
                    <h1>Component <span>Hardware</span></h1>
                </Link>
                <CartWidget />
            </div>
            <nav className={s.navbar}>
                <ul>
                    <li>
                        <NavLink 
                            to='/' 
                            className={({isActive}) => isActive ? s.active : s.inactive}
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                            >
                            Todos los productos
                        </NavLink>
                    </li> 
                    { categories.map((category) => (
                        <li key={category.key}>
                            <NavLink 
                                to={`/category/${category.key}`} 
                                className={({isActive}) => isActive ? s.active : s.inactive}
                                // onMouseEnter={handleMouseEnter}
                                // onMouseLeave={handleMouseLeave}
                                >
                                {category.description}
                            </NavLink>
                        </li>
                    )) }
                    <div id='menu-backdrop' className={s.boxNavLinks} ref={menuBackdropRef}></div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar