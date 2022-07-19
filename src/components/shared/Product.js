import React from "react";
import { Link } from "react-router-dom";
//functions
import { shorten, isInCart, quantityCount } from "../../helpers/functions";
//Icons
import trashIcon from "../../assets/icons/trash.svg";
import upIcon from "../../assets/icons/arrow.svg";
import downIcon from "../../assets/icons/downArrow.svg";
//CSS
import styles from "../../styles/Product.module.css";
//redux
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, increase, decrease } from "../../redux/Cart/cartAction";

const Product = ({ productData }) => {
    const state = useSelector((state) => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <Link to={`/products/${productData.id}`}>
                <img className={styles.cartImage} title={"Details"} src={productData.image} alt="Product" style={{ width: "200px", height: "200px" }} />
            </Link>
            <h3>{shorten(productData.title)}</h3>

            <div className={styles.buttonContainer}>
                <p>{productData.price} $</p>
                <div className={styles.smallContainer}>
                    {quantityCount(state, productData.id) > 1 && (
                        <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>
                            <img src={downIcon} alt="Down" style={{ width: "25px" }} />
                        </button>
                    )}
                    {quantityCount(state, productData.id) === 1 && (
                        <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}>
                            <img src={trashIcon} alt="Trash" style={{ width: "25px" }} />
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {isInCart(state, productData.id) ? (
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>
                            <img src={upIcon} alt="Up" style={{ width: "25px" }} />
                        </button>
                    ) : (
                        <button className={styles.itemButton} onClick={() => dispatch(addItem(productData))}>
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
