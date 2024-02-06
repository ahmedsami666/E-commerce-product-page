import React from "react";
import ItemImg from "./ItemImg";

const Collection = (props) => {
    const images = [1, 2, 3, 4]
    const creatImg = images.map((item) => {
      return (
        <ItemImg 
        key={item}
        id={item}
        selectedImg={props.selectedImg}
        setSelectedImg={props.setSelectedImg}
        />
      )
    })
    return (
      <div className="img-collection">
        {creatImg}
      </div>
    )
}
export default Collection