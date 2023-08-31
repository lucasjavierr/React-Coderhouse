import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import s from "./CartWidget.module.css";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className={s.cartWidgetContainer}>
      <Link to="/cart">
        {totalQuantity === 0 ? (
          <i className="bi bi-cart"></i>
        ) : (
          <i className="bi bi-cart-fill"></i>
        )}
        {totalQuantity}
      </Link>
    </div>
  );
};

export default CartWidget;
