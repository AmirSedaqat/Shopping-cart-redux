import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "../styles/ProductDetails.module.css";
//redux
import { useSelector } from "react-redux";
const ProductDetails = (props) => {
    const params = useParams();
    const id = params.id;
    const data = useSelector((state) => state.productsState.products);
    const product = data[id - 1];
    const { image, category, title, price, description } = product;
    return (
        <div className={styles.container}>
            <img className={styles.images} src={image} alt="Product Data" />

            <div className={styles.infoProduct}>
                <h1>Details: {title} </h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>
                    Category :<span>{category}</span>
                </p>
                <div className={styles.buttonContainer}>
                    <Link className={styles.back} to="/products">
                        Back to Shop
                    </Link>
                    <span className={styles.price}>{price} $</span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
