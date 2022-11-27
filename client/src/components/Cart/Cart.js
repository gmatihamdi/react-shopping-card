import React ,{useState}from 'react'
import '../../css/Cart/cart.css'
import Bounce from 'react-reveal/Bounce'
import Checkout from '../CheckoutForm/Checkout';
import { removeCart } from '../../store/actions/cart';
import {connect} from 'react-redux'

function Cart(props) {
    const[showform,setShowform]=useState(false);
    const[value,setValue]=useState("");
    const submitOrder =(e)=>{
        e.preventDefault();
        const order={
            name:value.name,
            email:value.email
        }
        console.log(order)
    }
    const handleChange =(e)=>{
        setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
  return (
    
    <div className='cart-wrapper'>
    <div className='cart-title'>{props.cartItem.length === 0 ? 'Empty Card' : <p>
        there is {props.cartItem.length} product in cart
    </p> }</div>
<div className='cart-items'>
{props.cartItem.map(p=>(
    <Bounce left cascade>
    <div className='cart-item'>
        <img src={p.imgeUrl} alt=''></img>
        <div className='cart-info'>
            <div>
                <p>{p.title}</p>
                <p>{p.qte}  </p>
                <p>{p.price}</p>

            </div>
            <button onClick={()=>props.removeCart(p)}>Remove</button>
        </div>
    </div>
    </Bounce>
))}
   
</div>
{ props.cartItem.length !== 0 && 
(
<div className='cart-footer'>
    <div className='total'>Total : $ {props.cartItem.reduce((acc,p)=>{
        return acc + p.price
    },0 )}</div>
    <button onClick={()=>setShowform(true)}>Select products</button>
</div>
)
}

<Checkout  showform={showform} setShowform={setShowform} submitOrder={submitOrder} handleChange={handleChange}/>
    </div>
   
  )
}

export default connect((state)=>{
    return{
        cartItem:state.cart.cartItems
    }
},{removeCart}) (Cart)
