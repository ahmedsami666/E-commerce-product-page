import React from "react";

const Cart = (props) => {
    const handleDeleteCartItem = () => {
        props.setNumItems(0)
        props.setPrice(0)
        props.setFinalPrice(0)
    }
    const handleCheckout = () => {
        props.setCart(false)
    }
    return (
        <div className="cart-div">
            <span>Cart</span>
            <hr></hr>
            {props.numItems === 0 ?
            <p>Your cart is empty</p>: 
            <div className="cart-data">
                <img src="./images/image-product-1.jpg" className="cart-product" alt="cart-product"/>
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <span>{`$125.00 x ${props.numItems} `}</span>
                    <span>${props.finalPrice}.00</span>
                </div>
                <img src="./images/icon-delete.svg" className="delete-icon" onClick={handleDeleteCartItem} alt="delete-icon"/>

                <button onClick={handleCheckout}>Checkout</button>
            </div>
            } 
        </div>
    )
}
export default Cart