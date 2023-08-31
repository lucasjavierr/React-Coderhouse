import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationService";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { ClipLoader } from "react-spinners";
import s from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);

  const { cart, clearCart, total } = useCart();
  const { setNotification } = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      email === "" ||
      confirmEmail === "" ||
      name === "" ||
      phone === 0 ||
      address === ""
    ) {
      setEmailError("Todos los campos deben estar completos");
      setIsFormIncomplete(true);
      return;
    } else if (email !== confirmEmail) {
      setEmailError("Los campos de email deben ser iguales");
      setIsFormIncomplete(true);
      return;
    } else {
      setEmailError("");
      setIsFormIncomplete(false);
    }
  }, [email, confirmEmail, name, phone, address]);

  const createOrder = async (e) => {
    e.preventDefault();

    setLoading(true);

    const objOrder = {
      buyer: {
        name: name,
        surname: surname,
        address: address,
        phone: phone,
        email: email,
        time: new Date(),
      },
      items: cart,
      total,
    };

    try {
      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );
      const { docs } = await getDocs(productsRef);

      const batch = writeBatch(db);
      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const ordersRef = collection(db, "orders");

        const { id } = await addDoc(ordersRef, objOrder);

        setNotification(
          "success",
          "La órden fue generada correctamente, el ID es: " + id,
          5000
        );
        clearCart();
        navigate("/");
      } else {
        setNotification(
          "error",
          "Hay productos de la lista que no tienen suficiente stock"
        );
      }
    } catch (error) {
      setNotification(
        "error",
        "Hubo un problema al momento de generar la órden"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ClipLoader
        size={50}
        color="#91c612"
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderWidth: "3px",
        }}
      />
    );
  }

  return (
    <section className={s.formContainer}>
      <h2>Datos del comprador</h2>
      <form onSubmit={createOrder}>
        <div className={s.inputBox}>
          <input
            required
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Nombre</label>
        </div>
        <div className={s.inputBox}>
          <input
            required
            value={surname}
            type="text"
            onChange={(e) => setSurname(e.target.value)}
          />
          <label>Apellido</label>
        </div>
        <div className={s.inputBox}>
          <input
            required
            value={phone}
            type="number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Teléfono</label>
        </div>
        <div className={s.inputBox}>
          <input
            required
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Dirección</label>
        </div>
        <div className={s.inputBox}>
          <input
            required
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className={s.inputBox}>
          <input
            required
            value={confirmEmail}
            type="email"
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          <label>Confirmar email</label>
        </div>
        {emailError && <p className={s.campError}>{emailError}</p>}
        {isFormIncomplete || <button>Generar órden de compra</button>}
      </form>
    </section>
  );
};

export default CheckoutForm;
