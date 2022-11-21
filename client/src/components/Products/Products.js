import React,{useState} from 'react'
import "../../css/Products/Products.css"
import Modal from 'react-modal'
import Bounce from 'react-reveal/Bounce'
import ProductModal from './ProductModal';
 function Products(props) {
    const [product,setProduct]=useState('');
    const openModal=(product) =>{
setProduct(product)
    }
    const closeModel=()=>{
        setProduct(false)
    }
  return (
    <Bounce left cascade>
         <div className='productElm'>
         {props.products.map(product=>(
<div className='product-item' key={product.id}>
<a href='#' onClick={()=>openModal(product)}>
<img src={product.imgeUrl}   alt={product.title}/>
</a>
<div className='product-desc'>
<p>{product.title}</p>
<span>{product.price}</span>
 </div>
 <button onClick={()=>props.addToCart(product)}>Add to cart</button>
 </div>

         ))}
       <ProductModal product={product} closeModel={closeModel}/>
         </div>
         </Bounce>
    
  )
}

export default Products