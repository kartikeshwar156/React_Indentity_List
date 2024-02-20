import { useState } from "react";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";



function App() {
  
const [cartItems, setCartItems]=useState(["product1", "product2"])

function handle_Onclear()
{
  setCartItems([])
}

  return (
    <>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => handle_Onclear()}></Cart>
    </>
  );
}

export default App;
