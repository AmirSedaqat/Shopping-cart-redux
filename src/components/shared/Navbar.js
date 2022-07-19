import React from 'react';
import { Link } from 'react-router-dom';

//icon
import shopIcon from '../../assets/icons/shop.svg'
import muteIcon from '../../assets/icons/mute-svgrepo-com.svg';
//Styles
import styles from '../../styles/Navbar.module.css';

//redux
import { useSelector } from 'react-redux';
const Navbar = () => {
    const state= useSelector(state=>state.cartState)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img src={muteIcon} alt="Sedaghat"/><h2>Sedaghat</h2>
                
                </div>
                <Link className={styles.productLink} to="/products">Product</Link>
                <div className={styles.shopIcon}>
                    <Link to="/cart"><img src={shopIcon} alt="Shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;