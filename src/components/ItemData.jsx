import React from "react";

const ItemData = (props) => {
  const handleMinus = () => {
    if (props.numItems === 0 ) {
      props.setPrice(0)
      props.setFinalPrice(0)
    } else {
      props.setPrice(props.price - 250)
      props.setFinalPrice(props.finalPrice - 125)
      props.setNumItems(props.numItems - 1)
    }
  }
  const handlePlus = () => {
    props.setPrice(props.price + 250)
    props.setFinalPrice(props.finalPrice + 125)
    props.setNumItems(props.numItems + 1)
  }
  const handleAddCard = () => {
    props.setCart(true)
  }
    return (
        <div className="item-data">
        <span className="company-name">
          Sneaker Company
        </span>
        <h1>
          Fall Limited Edition Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="pricing">
          <span className="price-after">
            ${props.finalPrice}.00
          </span>
          <div className="discount">
            <span>
              50%
            </span>
          </div>
          <span className="price-before">
            ${props.price}.00
          </span>
        </div>
        <div className="add-item">
          <div className="cart-num">
            <img src="./images/icon-minus.svg" alt="icon-minus" onClick={handleMinus}/>
            <span>{props.numItems}</span>
            <img src="./images/icon-plus.svg" alt="icon-plus" onClick={handlePlus}/>
          </div>
          <button onClick={handleAddCard}>
            <img src="./images/icon-cart.svg" alt="icon-cart"/>
            Add to cart
          </button>
        </div>
      </div>
    )
}
export default ItemData