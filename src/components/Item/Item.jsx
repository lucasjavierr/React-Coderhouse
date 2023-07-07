import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ id, img, name, price, displayList }) => {

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/item/${id}`)} className={displayList ? styles.listContainer : styles.cardContainer}>
            <div className={displayList ? styles.listImgContainer : styles.cardImgContainer}>
                <img src={img} alt={name}/>
            </div>
            <div className={displayList ? styles.listDetailsContainer : styles.cardDetailsContainer}>
                <h3>{name}</h3>
                <p>Precio: {price}</p>
            </div>
            <div className={displayList ? styles.listButtonContainer : styles.cardButtonContainer}>
                <button 
                    onClick = {(e) => {
                        e.stopPropagation()
                        navigate(`/item/${id}`) }}>
                    Ver detalle
                </button>
            </div>
        </div>
    )
}

export default Item