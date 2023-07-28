import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './notification/NotificationService';
import { CartProvider } from './context/CartContext';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <>
        <BrowserRouter>
            <NotificationProvider>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Component Hardware'} />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Filtrados'} />} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='*' element={<h1 style={{textAlign:'center', fontSize:'3rem'}}>404 NOT FOUND</h1>} />
                    </Routes>
                    <Footer />
                </CartProvider>
            </NotificationProvider>
        </BrowserRouter>
        </>
    );
}

export default App