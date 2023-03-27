import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    //const cart = props.cart // Option 01
    // const {cart} = props; Option 02
    console.log(cart)

    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }


    return (
        <div className='cart'>
            <h4>Product Summery</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total} </p>
            <p>Total Shipping: </p>
            <p>Tax:</p>
            <h6>Grand Total</h6>
        </div>
    );
};

export default Cart;