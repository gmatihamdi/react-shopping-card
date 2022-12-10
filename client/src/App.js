import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {Provider} from 'react-redux';
import store from '../src/store/store.js';
import {BrowserRouter,NavLink, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Orders from './pages/Orders';

function App() {
  /*
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
  */
  return (
<BrowserRouter>
    <Provider store={store}>
    <div className="layout">

      <Header/>
      <main>
      <div className='nav'>
        <ul>
          <li> <NavLink to="/">Home</NavLink></li>
          <li> <NavLink to="/Orders">Orders</NavLink></li>

        </ul>
      </div>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/Orders' element={<Orders/>} exact />

        </Routes>



      </main>
      <Footer></Footer>
      
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
