import React from 'react'
import "./style/App.css";
function Note({cartItems}) {
  const noItemsCart=cartItems.length;

  return (
    <div>
        <nav>
            <p>Start Bootstrap</p>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <h4>Cart<span> {noItemsCart}</span></h4>
        </nav>
    </div>
  )
}

export default Note;
