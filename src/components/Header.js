import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './Context API/CartContext';
import styles from './Header.module.css';

const Header = () => {

  const { cart } = useContext(CartContext);

  return (
    <div className={styles.header_container}>
      <span>Cart Context</span>

      <ul>
        <li className={styles.prod1}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.prod2}>
          <Link to="/cart">Cart {cart.length ? (cart.length ): ""}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header