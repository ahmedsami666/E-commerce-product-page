import React from "react";
import ItemPreview from "./ItemPreview";

const LightBox = (props) => {
    const handleCloseLightBox = () => {
        props.SetLightBox(false)
    }
    return (
        <div className="lightbox">
            <img src="./images/icon-close.svg" className="close-lightbox" onClick={handleCloseLightBox} alt="icon-close"/> 
            <ItemPreview
            selectedImg={props.selectedImg} 
            setSelectedImg={props.setSelectedImg} 
            lightBox={props.lightBox}
            SetLightBox={props.SetLightBox}
            /> 
            <div className="nav">
            <div>
              <img src="/images/icon-previous.svg" alt="previous" onClick={props.handlePrevious}/>
            </div>
            <div>
              <img src="./images/icon-next.svg" alt="next" onClick={props.handleNext}/>
            </div>
            </div>
        </div>

    )
}

export default LightBox