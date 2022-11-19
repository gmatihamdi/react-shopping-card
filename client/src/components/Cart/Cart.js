import React from 'react'
import '../../css/Cart/cart.css'
function Cart(props) {
  return (
    <div className='cart-wrapper'>
    <div className='cart-title'>{props.cartItem.length === 0 ? 'Empty Card' : <p>
        there is {props.cartItem.length} product in cart
    </p> }</div>

{props.cartItem.map(p=>(

    <div className='cart-item'>
        <img src={p.imgeUrl} alt=''></img>
        <div className='cart-info'>
            <div>
                <p>{p.title}</p>
                <p>{p.qte}  </p>
                <p>{p.price}</p>

            </div>
            <button onClick={()=>props.removeFromCart(p)}>Remove</button>
        </div>
    </div>

))}
   



    </div>
  )
}

export default Cart
