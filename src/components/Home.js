import React, { useContext } from 'react';
import CartContext from './Context API/CartContext';
import styles from './Home.module.css';
import SingleProduct from './SingleProduct';

const Home = () => {

  const {products} = useContext(CartContext);
  // console.log("home products : ", products);

  return (
    <div className={styles.home_container}>
      {products ? products.map((prod) => (
        <SingleProduct key={prod.id} prod={prod}/>
      )) : <h1 className={styles.red}>No Products To Show!</h1> }
    </div>
  )
}

export default Home;
