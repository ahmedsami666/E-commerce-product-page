import React from "react";
import Collection from "./Collection";

const ItemPreview = (props) => {
  const handlePrevious = () => {
    if (props.selectedImg === 1) {
      props.setSelectedImg(4)
    } else {
      props.setSelectedImg(props.selectedImg - 1)
    }
  }
  const handleNext = () => {
    if (props.selectedImg === 4) {
      props.setSelectedImg(1)
    } else {
      props.setSelectedImg(props.selectedImg + 1)
    }
  }
  const handleLightBox = () => {
    if (props.lightBox === false) {
      props.SetLightBox(true)
    } else {
      // do nothing
    }
  }
    return (
        <div className="item-preview">
          <div className="review-img">
            <img src={`./images/image-product-${props.selectedImg}.jpg`}  alt="product" onClick={handleLightBox}/>
            <div className="nav">
            <div>
              <img src="./images/icon-previous.svg" alt="previous" onClick={handlePrevious}/>
            </div>
            <div>
              <img src="./images/icon-next.svg" alt="next" onClick={handleNext}/>
            </div>
            </div>
          </div>
          <Collection 
            selectedImg={props.selectedImg}
            setSelectedImg={props.setSelectedImg}
          /> 
        </div>
    )
}
export default ItemPreview