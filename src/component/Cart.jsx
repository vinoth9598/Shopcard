const Cart=({cartItems,removeItem})=>{
    return(
        <div>
            <div className="removeItem">
                <ul>
                    {
                        cartItems.map((cartItem)=>{
                            
                            return(
                                <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                    removeItem={removeItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
     
}


function CartItem({cartItem,removeItem}){
    return(
        <div>
            <h3>{cartItem.productName}</h3>
            <h4>${cartItem.productSalePrice}</h4>
            <button className="button" onClick={()=>removeItem(cartItem.id)}
            >
                Remove Item
            </button>
        </div>
    )
}

export default Cart;