import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';

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
                        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </NotificationProvider>
        </BrowserRouter>
        </>
    );
}

export default App