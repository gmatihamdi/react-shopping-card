import { CLEAR_CART, CLEAR_ORDER, CREAT_ORDER, FETCH_ORDER } from "./type"

export const creatOrder=(order)=>{
    return(dispatch)=>{
        fetch('/api/orders',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(order)
        }).then(res=>res.json()).then(data=>{
           dispatch({
            type: CREAT_ORDER,
            data:{
                order:data
            }
           }) 
        }) 
        localStorage.clear('cartItem');
        dispatch({type:CLEAR_CART})
    }
}

export  const clearOrder=()=>{
    return(dispatch)=>{
        dispatch({
            type:CLEAR_ORDER

        })
    }
}

export const fetchOrder=()=>{
    return(dispatch)=>{

        fetch('/api/orders').then(res=>res.json()).then(data=>{
           dispatch({
            type: FETCH_ORDER,
            data:{
                order:data
            }
           }) 




    })}}
