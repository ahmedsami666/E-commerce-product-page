import React from "react";

const Header = (props) => {
    const handleMenu = () => {
      props.setMenu(true)
    }
    const handleCartIcon = () => {
      props.setCart(! props.cart)
    }
    
    return (
        <div className="header">
          <div className="logo-div">
            <img src="./images/icon-menu.svg" alt="menu-icon" className="menu-icon" onClick={handleMenu}/>
            <img src="./images/logo.svg" alt="logo"/>
          </div>
          <div className="header-items">
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="header-icons">
            <div>
              {props.numItems > 1 ?
              <div className="item-num"><span>{props.numItems}</span></div>:
              null}
              <img src="./images/icon-cart.svg" className="cart" alt="caet" onClick={handleCartIcon}/>
            </div>
            <img src="./images/image-avatar.png" className="avatar" alt="avatar"/>
          </div>
          <hr></hr>
      </div>
    )
}
export default Header