import { useCart } from "../../context/CartContext";

import ItemCart from "../ItemCart/ItemCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import s from "./Checkout.module.css";

const Checkout = () => {
  const { cart, total } = useCart();
  console.log(cart);

  return (
    <main className={s.checkoutContainer}>
      <h1>Checkout</h1>

      {/* aca reutilizo el mismo componente que utilicé para el carrito */}
      {cart.map((prod) => (
        <ItemCart key={prod.id} {...prod} />
      ))}

      <p className={s.totalCheckout}>Total: {total}</p>

      {cart.length > 0 ? (
        <CheckoutForm />
      ) : (
        <h2 style={{ textAlign: "center", padding: "40px" }}>
          No puedes generar una órden, tu carrito está vacío 😕
        </h2>
      )}
    </main>
  );
};

export default Checkout;
