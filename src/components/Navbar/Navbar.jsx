import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNotification } from '../../notification/NotificationService'
import CartWidget from '../CartWidget/CartWidget'
import s from './Navbar.module.css'

const Navbar = () => {
    const [ categories, setCategories ] = useState([])
    const { setNotification } = useNotification()
    const menuBackdropRef = useRef(null)
    

    useEffect(() => {
        const getCategories = async () => {
            try {
                const categoriesRef = collection(db, 'categories')
                const querySnapshot = await getDocs(categoriesRef)
                const categoriesData = querySnapshot.docs.map(doc => doc.data())
                setCategories(categoriesData)
            } catch (error) {
                setNotification('error', 'Hubo un error al generar las categorías')
            }
        }
        getCategories()
    }, [])

    useEffect(() => {
        const listItem = document.querySelectorAll('.navbar ul li');
        const menuBackdrop = menuBackdropRef.current;
    
        const handleMouseEnter = (e) => {
            const { left, top, width, height } = e.target.getBoundingClientRect();
    
            menuBackdrop.style.setProperty('--left', `${left}px`);
            menuBackdrop.style.setProperty('--top', `${top}px`);
            menuBackdrop.style.setProperty('--width', `${width}px`);
            menuBackdrop.style.setProperty('--height', `${height}px`);
            menuBackdrop.style.opacity = '1';
        };
    
        const handleMouseLeave = () => {
            menuBackdrop.style.opacity = '0';
        };
    
        listItem.forEach((item) => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });
    
        return () => {
            listItem.forEach((item) => {
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <Link to='/'>
                    <h1>Component <span>Hardware</span></h1>
                </Link>
                <CartWidget />
            </div>
            <nav  className={s.navbar}>
                <ul>
                    <li>
                        <NavLink to='/' 
                            className={({isActive}) => isActive ? s.active : s.inactive}
                            onMouseEnter={(e) => {
                                const { left, top, width, height } = e.target.getBoundingClientRect();
                                menuBackdropRef.current.style.setProperty('--left', `${left}px`);
                                menuBackdropRef.current.style.setProperty('--top', `${top}px`);
                                menuBackdropRef.current.style.setProperty('--width', `${width}px`);
                                menuBackdropRef.current.style.setProperty('--height', `${height}px`);
                                menuBackdropRef.current.style.opacity = '1';
                            }}
                            onMouseLeave={() => {
                                menuBackdropRef.current.style.opacity = '0';
                            }}
                            >
                            Todos los productos
                        </NavLink>
                    </li> 
                    {
                        categories.map((category) => (
                            <li key={category.key}>
                                <NavLink 
                                    to={`/category/${category.key}`} 
                                    className={({isActive}) => isActive ? s.active : s.inactive}
                                    onMouseEnter={(e) => {
                                        const { left, top, width, height } = e.target.getBoundingClientRect();
                                        menuBackdropRef.current.style.setProperty('--left', `${left}px`);
                                        menuBackdropRef.current.style.setProperty('--top', `${top}px`);
                                        menuBackdropRef.current.style.setProperty('--width', `${width}px`);
                                        menuBackdropRef.current.style.setProperty('--height', `${height}px`);
                                        menuBackdropRef.current.style.opacity = '1';
                                    }}
                                    onMouseLeave={() => {
                                        menuBackdropRef.current.style.opacity = '0';
                                    }}
                                    >
                                    {category.description}
                                </NavLink>
                            </li>
                        ))
                    }
                    <div id='menu-backdrop' className={s.boxNavLinks} ref={menuBackdropRef}></div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar