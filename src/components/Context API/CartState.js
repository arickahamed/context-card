import faker from 'faker';
import React, { useState } from 'react';
import CartContext from './CartContext';

const CartState = ({children}) => {
    const [cart, setCart] = useState([]);

    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
    }));
    
    const [products] = useState(productsArray);
    // console.log(products);
    
    return (
        <CartContext.Provider value={{cart, setCart, products}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState;