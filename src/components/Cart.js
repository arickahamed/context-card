import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import CartContext from './Context API/CartContext';
import SingleProduct from './SingleProduct';

const Cart = () => {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState();
  // console.log(cart);

  useEffect(()=> {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart]);

  return (
    <div className={styles.cart_container}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total:{cart.length ? total : "00"} </span>
      <div className={styles.product_container}>
        {cart.length ? cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        )) : <h2 className={styles.cart_h}>You haven't select any product. Go <Link className={styles.red} to="/">Home</Link> to find you product. </h2> }
      </div>
    </div>
  )
}

export default Cart;