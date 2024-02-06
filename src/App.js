import React from "react"
import Header from "./components/Header";
import ItemPreview from "./components/ItemPreview";
import ItemData from "./components/ItemData";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import LightBox from "./components/LightBox";
import Cart from "./components/Cart";

function App() {
  const [menu, setMenu] = React.useState(false)
  const [selectedImg, setSelectedImg] = React.useState(1)
  const [price, setPrice] = React.useState(250)
  const [finalPrice, setFinalPrice] = React.useState(price/2)
  const [numItems, setNumItems] = React.useState(1)
  const [lightBox, SetLightBox] = React.useState(false)
  const [cart, setCart] = React.useState(false)

  return (
    <div className="main">
      {lightBox ? 
      <LightBox 
      selectedImg={selectedImg} 
      setSelectedImg={setSelectedImg} 
      lightBox={lightBox}
      SetLightBox={SetLightBox}
      /> : null}

      {menu ? <Menu setMenu={setMenu}/> : null}
      <Header 
      setMenu={setMenu} 
      menu={menu}
      cart={cart}
      setCart={setCart}
      numItems={numItems}
      /> 
      {cart ? 
      <Cart
      numItems={numItems}
      finalPrice={finalPrice}
      setNumItems={setNumItems}
      setCart={setCart}
      setPrice={setPrice}
      setFinalPrice={setFinalPrice}
      /> :
      null}
    
      <div className="item">
        <ItemPreview 
        selectedImg={selectedImg} 
        setSelectedImg={setSelectedImg} 
        lightBox={lightBox}
        SetLightBox={SetLightBox}
        />

        <ItemData 
        price={price}
        setPrice={setPrice}
        finalPrice={finalPrice}
        setFinalPrice={setFinalPrice}
        numItems={numItems}
        setNumItems={setNumItems}
        cart={cart}
        setCart={setCart}
        />

      </div>
      <Footer />
    </div>
  );
}

export default App;
