import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Basket from './components/basket/Basket'
import './App.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Description from './components/Description'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export const AppContext = React.createContext({})

function App() {

    // хранение данных товаров
    const [products, setProducts] = useState([])
    // хранение корзины
    const [overlayItems, setOverlayItems] = useState([])

    useEffect(() => {
        async function axiosData() {
            const productsData = await axios.get('https://640b9ab1a3e07380e8e3ceb5.mockapi.io/product')
            const cartData = await axios.get('https://640b9ab1a3e07380e8e3ceb5.mockapi.io/cart')

            setProducts(productsData.data);
            setOverlayItems(cartData.data);
        }

        axiosData();

    }, [])

    const deleteItems = (id) => {
        axios.delete(`https://640b9ab1a3e07380e8e3ceb5.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete) => objDelete.filter(item => item.id !== id))
    }

    const isAdded = (myId) => {
        return overlayItems.some((objIsAdded) => objIsAdded.myId === myId)
    }

    return (

        <AppContext.Provider
            value={
                {
                    products,
                    setProducts,
                    overlayItems,
                    setOverlayItems,
                    isAdded
                }
            }>

            <div>

                <Router>
                    <Header></Header>

                    <Routes>
                        <Route
                            path='/'
                            element={
                                <Home
                                    item={products}
                                    overlayItems={overlayItems}
                                    setOverlayItems={setOverlayItems}
                                >
                                </Home>}>
                        </Route>

                        <Route
                            path='/cart'
                            element={
                                <Basket
                                    totalPrice={
                                        overlayItems.reduce((element = overlayItems.length, obj) => element + obj.price, 0)
                                    }
                                    overlayProp={overlayItems}
                                    deleteItems={deleteItems}
                                >
                                </Basket>}>
                        </Route>

                        <Route
                            path='/description'
                            element={
                                <Description
                                >

                                </Description>
                            }>
                        </Route>

                    </Routes>
                </Router>

                <Footer></Footer>

            </div>

        </AppContext.Provider>
    );
}

export default App;
