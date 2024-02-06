import React from "react";

const ItemImg = (props) => {
    const handleImg = (e) => {
        props.setSelectedImg(e.target.id)
        const currrentImg = document.getElementById(e.target.id)
        for (var i = 1; i < 5; i++){
            document.getElementById(i).classList.remove("selected-img")
        }
        currrentImg.classList.add("selected-img")
    }
    return (
    <div>
        <img 
        id={props.id} 
        src={`./images/image-product-${props.id}.jpg`} 
        alt="product" 
        onClick={handleImg}
        className={props.selectedStyle}
        />
    </div>
    )
}

export default ItemImg