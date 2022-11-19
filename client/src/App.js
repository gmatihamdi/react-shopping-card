import React,{useState,useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Products from './components/Products/Products';
import data from './datafile.json';

function App() {
  const [products,setProducts]=useState(data);
  const [sort,setSort]=useState("");
  const [size,setSize]=useState("");
  const [cartItem,SetCartItem]=useState(JSON.parse(localStorage.getItem('cartItem'))||[]);

const  handleFilterBySize=(e)=> {
  //  console.log(e.target.value)
  setSize(e.target.value);
  if(e.target.value=="ALL"){
    setProducts(data)
   } else{
  
  let productsclone=[...products];
  let newProducts=productsclone.filter(p=>p.sizes.indexOf(e.target.value)!= -1);
  setProducts(newProducts)
  }}
  const handleFilterByOrder=(e)=>{
    let order=e.target.value;
    setSort(order);
    let productsClone=[...products];
    let newProducts =productsClone.sort(function(a,b){
      if(order=="lowest"){
        return a.price - b.price
      }else if(order=="highest"){
        return b.price - a.price
      }
      else return a.id < b.id ? 1 : -1
    })
    setProducts(newProducts)
  }
  const addToCart = (product) => {
    const cartItemClone=[...cartItem];
    var isProductExist=false;
    cartItemClone.forEach(p=>{
      if(p.id == product.id){
        p.qte++;
        isProductExist=true;
      }
    })
    if(!isProductExist){
      cartItemClone.push({...product,qte:1})
    }
    SetCartItem(cartItemClone)
  }
  const removeFromCart = (product) =>{
    const cartItemClone =[...cartItem]

    SetCartItem(cartItemClone.filter(pr=>pr.id != product.id))
  }
  useEffect(() => {
    localStorage.setItem('cartItem',JSON.stringify(cartItem))
  }, [cartItem]);
  return (
    <div className="layout">

      <Header/>
      <main>
        <div className='wrapper'>

         <Products products={products} addToCart={addToCart}></Products>
          <Filter productNumber={products.length} handleFilterBySize={handleFilterBySize} size={size}
           handleFilterByOrder={handleFilterByOrder} sort={sort}/>
        </div>
        <Cart cartItem={cartItem} removeFromCart={removeFromCart}/>
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
