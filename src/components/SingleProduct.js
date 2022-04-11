import React, { useContext } from 'react';
import CartContext from './Context API/CartContext';
import styles from './SingleProduct.module.css';

const SingleProduct = ({prod}) => {
    const {cart, setCart} = useContext(CartContext);

    return (
        <div className={styles.products}>
            <img src={prod.image} alt={prod.name} />
            <div className={styles.productDes}>
                <span style={{fontWeigth: 700}}>{prod.name}</span>
                <br />
                <span>Bdt: {prod.price.substring(0,3)}tk</span>
            </div>
            {cart.includes(prod) ? <button className={styles.remove} onClick={()=>{
                setCart(cart.filter(c=>c.id !== prod.id))
            }} >Remove</button> : <button className={styles.add} onClick={()=>{
                setCart([...cart, prod])
            }} >Add to Cart</button> }
        </div>
    )
}

export default SingleProduct;