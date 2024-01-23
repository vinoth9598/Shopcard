import React from 'react';
import StarRating from './starRating';
function Hello({productdata,addItem,cartItems}) {

   
  return (
    <div className='addItem'>
       {
        productdata.map((product)=>{
         
           return(
                
                <Card 
                    name={product.productName}
                    img={product.productImg}
                    price={product.productPrice}
                    rating={product.productRating}
                    sale={product.sale}
                    salePrice={product.productSalePrice}
                    key={product.id}
                    id={product.id}
                    addItem={addItem}
                    cartItems={cartItems}
                />
                
           )
        })
       }


    </div>
  )
}
const Card=({name,img,price,rating,salePrice,id,addItem,cartItems})=>{
    let existId=cartItems.map((obj)=>obj.id).includes(id);
    console.log("existId :",existId);
    return(
        <div className="items">
            <div  >
                <div>
                   <p className='image'>{img}</p>
                </div>
                
                <div>
                    <h5>{name}</h5>
                    <StarRating rating={rating}/>${price}
                </div>
                <div >
                    <button 
                    className='button'
                    disabled={existId} 
                        onClick={()=>{
                            addItem(id);
                        }}
                        href="#" 
                        >
                            Add to cart
                    </button>
               </div>
               
            </div>
                
        </div>
    )
    
}




export default Hello;
