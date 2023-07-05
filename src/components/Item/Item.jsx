import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ id, img, name, price, displayList }) => {

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/item/${id}`)} className={(displayList ? styles.listContainer : styles.cardContainer)}>
            <div className={displayList ? styles.listImgContainer : styles.cardImgContainer}>
                <img src={img} alt={name} className={(displayList ? styles.listImgProduct : styles.cardImgProduct)}/>
            </div>
            <div className={displayList ? styles.listDetailsContainer : styles.cardDetailsContainer}>
                <h3>{name}</h3>
                <p>Precio: {price}</p>
            </div>
            <div className={displayList ? styles.listButtonContainer : styles.cardButtonContainer}>
                <button 
                    onClick = {(e) => {
                        e.stopPropagation()
                        navigate(`/item/${id}`)
                    }} 
                        className={displayList ? styles.listButtonDetails : styles.cardButtonDetails}>Ver detalle
                </button>
            </div>
        </div>
    )
}

export default Item
{/* la prop key va como un identificador para que react pueda comparar lo anterior con lo nuevo y hacer el render siempre va dentro del metodo .map() en el componente padre */}