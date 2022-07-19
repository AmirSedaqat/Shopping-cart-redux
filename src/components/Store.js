import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Product from "./shared/Product";
//Redux
import { fetchProducts } from "../redux/Products/productsAction";
//CSS
import styles from "../styles/Store.module.css";
import Loader from "./Loader";

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.productsState);
    useEffect(() => {
        if(!productsState.products.length)dispatch(fetchProducts());
    }, []);
    return (
        <div className={styles.container}>
            {productsState.loading ? (
                <Loader/>
            ) : productsState.error ? (
                <h2>Something went wrong ...</h2>
            ) : (
                productsState.products.map((item) => <Product key={item.id} productData={item}></Product>)
            )}
        </div>
    );
};

export default Store;
