import { useNavigate } from 'react-router-dom'
import s from './Item.module.css'

const Item = ({ id, img, name, price, displayList }) => {

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/item/${id}`)} className={displayList ? s.listContainer : s.cardContainer}>
            <div className={displayList ? s.listImgContainer : s.cardImgContainer}>
                <img src={img} alt={name}/>
            </div>
            <div className={displayList ? s.listDetailsContainer : s.cardDetailsContainer}>
                <h3>{name}</h3>
                <p>Precio: {price}</p>
            </div>
            <div className={displayList ? s.listButtonContainer : s.cardButtonContainer}>
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