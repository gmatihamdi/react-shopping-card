import React from 'react'
import "../../css/Products/Products.css"
 function Products(props) {
  return (
         <div className='productElm'>
         {props.products.map(product=>(
<div className='product-item' key={product.id}>
<img src={product.imgeUrl}   alt={product.title}/>
<div className='product-desc'>
<p>{product.title}</p>
<span>{product.price}</span>
 </div>
 <button>Add to cart</button>
 </div>

         ))}
         </div>
    
  )
}

export default Products