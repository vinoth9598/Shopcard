import Hello from "./component/Hello"
import productdata from "./Data/Data";
import Header from "./component/Header";
import Note from "./component/Navigation";
import Cart from "./component/Cart";
import "./component/style/App.css";
import { useState } from "react";


const App=()=>{
  const [cartItems,setCartItems]=useState([]);

  const addItem=(item)=>{
    const getData=productdata.filter((inp)=>inp.id===item);
    setCartItems([...cartItems,...getData]);
  };
  const removeItem=(item)=>{
    console.log("remove Item",item);
    const filteredData=cartItems.filter((obj)=>obj.id !==item)
    
    setCartItems([...filteredData]);
  };
 
  return(
    <div className="container">
        <Note  cartItems={cartItems}/>
        <Header/>
        <Cart removeItem={removeItem} cartItems={cartItems}/>
        <Hello  productdata={productdata} cartItems={cartItems} addItem={addItem} />
        
    </div>
  )
}


export default App;