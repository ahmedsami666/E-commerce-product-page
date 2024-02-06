import React from "react";

const Menu = (props) => {
    const handleClose = () => {
        props.setMenu(false)
    }
    return (
        <div className="menu">
            <img src="./images/icon-close.svg" alt="icon-close" onClick={handleClose}/>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
        </div>
    )
}

export default Menu