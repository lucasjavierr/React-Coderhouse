import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.cartWidget}>
                <Link to='/' className={styles.logo}>Component <span>Hardware</span></Link>
                <CartWidget />
            </div>
            <div className={styles.navLinks}>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : styles.inactive}>Todos los productos</NavLink>
                <NavLink to={'/category/notebooks'}>Notebooks</NavLink>
                <NavLink to={'/category/processors'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Procesadores</NavLink>
                <NavLink to={'/category/graphics-cards'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Tarjetas Gráficas</NavLink>
                <NavLink to={'/category/motherboards'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Motherboards</NavLink>
                <NavLink to={'/category/ram-memories'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Memorias RAM</NavLink>
                <NavLink to={'/category/storage'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Almacenamiento</NavLink>
                <NavLink to={'/category/power-suplies'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Fuentes de alimentacion</NavLink>
                {/* <NavLink to={'/category/refrigeration'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Refrigeración</NavLink> */}
                {/* <NavLink to={'/category/chassis'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Gabinetes</NavLink> */}
                {/* <NavLink to={'/category/accesories'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Accesorios</NavLink> */}
            </div>
        </nav>
    )
}

export default Navbar