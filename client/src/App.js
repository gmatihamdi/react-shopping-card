import React,{useState} from 'react';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Products from './components/Products/Products';
import data from './datafile.json';

function App() {
  const [products,setProducts]=useState(data);
  const [sort,setSort]=useState("");
  const [size,setSize]=useState("");
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
  return (
    <div className="layout">

      <Header/>
      <main>
        <div className='wrapper'>

         <Products products={products}></Products>
          <Filter  handleFilterBySize={handleFilterBySize} size={size}
           handleFilterByOrder={handleFilterByOrder} sort={sort}/>

        

        </div>
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
