import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

//Component
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import ScrollTopMe from "./components/ScrollTopMe";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
    return (
        <Provider store={store}>
            <ScrollTopMe />
            <Navbar />
            <Routes>
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products" element={<Store />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/*" element={<Navigate to="/products" />} />
            </Routes>
        </Provider>
    );
};

export default App;
